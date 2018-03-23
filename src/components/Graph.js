/* Sourced from: http://sxywu.com/react-d3 */

import React, { Component } from 'react';

class Graph extends React.Component {
  constructor(props) {
    super(props);
    this.state = {selected: null};

    this.selectNode = this.selectNode.bind(this);
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.version === this.props.version) {
      // if version is the same, no updates to data
      // so it must be interaction to select+highlight a node
      this.calculateHighlights(nextState.selected);
      this.circles.attr('opacity', d =>
        !nextState.selected || this.highlightedNodes[d.key] ? 1 : 0.2)
      this.lines.attr('opacity', d =>
        !nextState.selected || this.highlightedLinks[d.key] ? 0.5 : 0.1)
      return false;
    }
    return true;
  }

  componentDidMount() {
      this.container = d3.select(this.refs.container);
      this.calculateData();
      this.calculateHighlights(this.state.selected);
      this.renderLinks();
      this.renderNodes();
    }

  componentDidUpdate() {
    this.calculateData();
    this.calculateHighlights(this.state.selected);
    this.renderLinks();
    this.renderNodes();
  }

  calculateData() {
    var {nodes, links} = this.props;
    simulation.nodes(nodes)
      .force('link', d3.forceLink(links).id(d => d.key).distance(100));

    _.times(2000, () => simulation.tick());
    this.nodes = nodes;
    this.links = links;
  }

  calculateHighlights(selected) {
    this.highlightedNodes = {};
    this.highlightedLinks = {};
    if (selected) {
      this.highlightedNodes[selected] = 1;
      _.each(this.links, link => {
        if (link.source.key === selected) {
          this.highlightedNodes[link.target.key] = 1;
          this.highlightedLinks[link.key] = 1;
        }
        if (link.target.key === selected) {
          this.highlightedNodes[link.source.key] = 1;
          this.highlightedLinks[link.key] = 1;
        }
      });
    }
  }

  renderNodes() {
    this.circles = this.container.selectAll('circle')
      .data(this.nodes, d => d.key);
    // exit
    this.circles.exit().remove();
    // enter + update
    this.circles = this.circles.enter().append('circle')
      .classed('node', true)
      .merge(this.circles)
      .attr('cx', d => d.x)
      .attr('cy', d => d.y)
      .attr('r', d => d.size)
      .attr('opacity', d =>
        !this.state.selected || this.highlightedNodes[d.key] ? 1 : 0.2)
      .on('click', this.selectNode);
  }

  renderLinks() {
      this.lines = this.container.selectAll('line')
        .data(this.links, d => d.key);
      // exit
      this.lines.exit().remove();
      // enter + update
      this.lines = this.lines.enter().insert('line', 'circle')
        .classed('link', true)
        .merge(this.lines)
        .attr('stroke-width', d => d.size)
        .attr('x1', d => d.source.x)
        .attr('x2', d => d.target.x)
        .attr('y1', d => d.source.y)
        .attr('y2', d => d.target.y)
        .attr('opacity', d =>
          !this.state.selected || this.highlightedLinks[d.key] ? 0.5 : 0.1);
  }

  selectNode(node) {
    if (node.key === this.state.selected) {
      this.setState({selected: null});
    } else {
      this.setState({selected: node.key});
    }
  }

  render() {
    return (
      <svg ref="container"></svg>
    )
  }
}

export default Graph;
