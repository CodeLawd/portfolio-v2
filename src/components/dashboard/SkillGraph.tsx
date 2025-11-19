"use client";

import React, { useEffect, useRef } from "react";
import * as d3 from "d3";
import { GraphData, Skill, Link } from "@/types";

interface SkillNode extends Skill, d3.SimulationNodeDatum {}

interface SkillGraphProps {
  data: GraphData;
}

const SkillGraph: React.FC<SkillGraphProps> = ({ data }) => {
  const svgRef = useRef<SVGSVGElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!svgRef.current || !containerRef.current || !data) return;

    const width = containerRef.current.clientWidth;
    const height = containerRef.current.clientHeight || 600;

    // Clear previous graph
    d3.select(svgRef.current).selectAll("*").remove();

    const svg = d3
      .select(svgRef.current)
      .attr("width", width)
      .attr("height", height)
      .attr("viewBox", [0, 0, width, height]);

    // Color scale based on groups
    const color = d3.scaleOrdinal<string>()
      .domain(["1", "2", "3", "4", "5"])
      .range(["#10b981", "#3b82f6", "#8b5cf6", "#f43f5e", "#f59e0b"]);

    // Prepare data for simulation (clone to avoid mutating props if strict)
    // In d3 v6+, it's often safer to map to new objects if data is immutable
    const nodes: SkillNode[] = data.nodes.map(d => ({ ...d }));
    const links: d3.SimulationLinkDatum<SkillNode>[] = data.links.map(d => ({ ...d }));

    // Simulation setup
    const simulation = d3.forceSimulation<SkillNode>(nodes)
      .force(
        "link",
        d3.forceLink<SkillNode, d3.SimulationLinkDatum<SkillNode>>(links)
          .id((d) => d.id)
          .distance(100)
      )
      .force("charge", d3.forceManyBody().strength(-300))
      .force("center", d3.forceCenter(width / 2, height / 2))
      .force("collide", d3.forceCollide<SkillNode>().radius((d) => d.radius + 10));

    // Draw links
    const link = svg
      .append("g")
      .attr("stroke", "#334155")
      .attr("stroke-opacity", 0.6)
      .selectAll("line")
      .data(links)
      .join("line")
      .attr("stroke-width", (d) => Math.sqrt((d as any).value || 1));

    // Draw nodes
    const node = svg
      .append("g")
      .attr("stroke", "#fff")
      .attr("stroke-width", 1.5)
      .selectAll("g")
      .data(nodes)
      .join("g")
      .call(
        d3.drag<SVGGElement, SkillNode>()
          .on("start", dragstarted)
          .on("drag", dragged)
          .on("end", dragended) as any
      );

    // Node circles
    node.append("circle")
      .attr("r", (d) => d.radius)
      .attr("fill", (d) => color(String(d.group)) as string)
      .attr("fill-opacity", 0.8)
      .attr("stroke", (d) => d3.rgb(color(String(d.group)) as string).brighter(2).formatHex());

    // Node labels
    node.append("text")
      .text((d) => d.id)
      .attr("x", 0)
      .attr("y", (d) => d.radius + 15)
      .attr("text-anchor", "middle")
      .attr("fill", "#cbd5e1")
      .attr("font-size", "10px")
      .attr("font-family", "monospace")
      .attr("pointer-events", "none");

    // Simulation tick
    simulation.on("tick", () => {
      link
        .attr("x1", (d) => (d.source as SkillNode).x!)
        .attr("y1", (d) => (d.source as SkillNode).y!)
        .attr("x2", (d) => (d.target as SkillNode).x!)
        .attr("y2", (d) => (d.target as SkillNode).y!);

      node.attr("transform", (d) => {
        // Bounding box constraint
        const radius = d.radius;
        d.x = Math.max(radius, Math.min(width - radius, d.x!));
        d.y = Math.max(radius, Math.min(height - radius, d.y!));
        return `translate(${d.x},${d.y})`;
      });
    });

    function dragstarted(event: any) {
      if (!event.active) simulation.alphaTarget(0.3).restart();
      event.subject.fx = event.subject.x;
      event.subject.fy = event.subject.y;
    }

    function dragged(event: any) {
      event.subject.fx = event.x;
      event.subject.fy = event.y;
    }

    function dragended(event: any) {
      if (!event.active) simulation.alphaTarget(0);
      event.subject.fx = null;
      event.subject.fy = null;
    }

    return () => {
      simulation.stop();
    };
  }, [data]);

  return (
    <div ref={containerRef} className="w-full h-full min-h-[400px]">
      <svg ref={svgRef} className="w-full h-full"></svg>
    </div>
  );
};

export default SkillGraph;
