// World Map Visualization
const width = document.getElementById('world-map').offsetWidth;
const height = 400;

const svg = d3.select("#world-map")
  .append("svg")
  .attr("width", width)
  .attr("height", height);

const projection = d3.geoMercator()
  .scale(width / 2 / Math.PI)
  .translate([width / 2, height / 2]);

const path = d3.geoPath().projection(projection);

// URL del archivo GeoJSON
d3.json("https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/world.geojson")
  .then(function(data) {
    svg.selectAll("path")
      .data(data.features)
      .enter()
      .append("path")
      .attr("d", path)
      .style("fill", "#69b3a2")
      .style("stroke", "#fff")
      .style("stroke-width", 0.5);
  
    // Marcadores para destinos destacados
    const destinations = [
      { name: "Paris", coords: [2.3522, 48.8566] },
      { name: "Tokyo", coords: [139.6917, 35.6895] },
      { name: "New York", coords: [-74.006, 40.7128] },
      { name: "London", coords: [-0.1276, 51.5074] }
    ];

    svg.selectAll("circle")
      .data(destinations)
      .enter()
      .append("circle")
      .attr("cx", d => projection(d.coords)[0])
      .attr("cy", d => projection(d.coords)[1])
      .attr("r", 5)
      .style("fill", "red")
      .style("stroke", "#fff")
      .style("stroke-width", 2);
  })
  .catch(function(error) {
    console.error("Error cargando el archivo GeoJSON:", error);
  });
