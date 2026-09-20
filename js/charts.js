/**
 * ACADEMIC SGPA TREND CHART RENDERER (charts.js)
 * Renders an interactive SVG performance trend graph based on completed semesters (1 to 4).
 * Styled with exact Primary Dark Teal (#304A43) and Accent Sage (#8FB3A8) palette.
 */

function renderAcademicChart(semestersData) {
  const container = document.getElementById('academic-chart-container');
  if (!container) return;

  const completedSems = semestersData.filter(s => typeof s.score === 'number' && !isNaN(s.score));
  if (completedSems.length === 0) return;

  const width = 600;
  const height = 220;
  const paddingLeft = 45;
  const paddingRight = 35;
  const paddingTop = 30;
  const paddingBottom = 40;

  const chartWidth = width - paddingLeft - paddingRight;
  const chartHeight = height - paddingTop - paddingBottom;

  const scores = completedSems.map(s => s.score);
  const minScore = 4.0;
  const maxScore = 10.0;

  const points = scores.map((score, index) => {
    const x = paddingLeft + (index / Math.max(1, scores.length - 1)) * chartWidth;
    const y = paddingTop + chartHeight - ((score - minScore) / (maxScore - minScore)) * chartHeight;
    return { x, y, score, label: completedSems[index].semester, sgpa: completedSems[index].sgpa };
  });

  const pointsString = points.map(p => `${p.x},${p.y}`).join(' ');
  const areaPointsString = `${paddingLeft},${height - paddingBottom} ` + 
                           pointsString + 
                           ` ${points[points.length - 1].x},${height - paddingBottom}`;

  let svgHTML = `
    <svg class="chart-svg" viewBox="0 0 ${width} ${height}" preserveAspectRatio="none">
      <defs>
        <linearGradient id="chartGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#8FB3A8" stop-opacity="0.35" />
          <stop offset="100%" stop-color="#304A43" stop-opacity="0.0" />
        </linearGradient>
      </defs>

      <!-- Horizontal Grid Lines -->
      <line x1="${paddingLeft}" y1="${paddingTop}" x2="${width - paddingRight}" y2="${paddingTop}" stroke="#D9E2DE" stroke-dasharray="4 4" />
      <line x1="${paddingLeft}" y1="${paddingTop + chartHeight / 2}" x2="${width - paddingRight}" y2="${paddingTop + chartHeight / 2}" stroke="#D9E2DE" stroke-dasharray="4 4" />
      <line x1="${paddingLeft}" y1="${height - paddingBottom}" x2="${width - paddingRight}" y2="${height - paddingBottom}" stroke="#D9E2DE" />

      <!-- Area Fill -->
      <polygon points="${areaPointsString}" fill="url(#chartGradient)" />

      <!-- Trend Line -->
      <polyline points="${pointsString}" fill="none" stroke="#304A43" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />

      <!-- Data Points & Labels -->
  `;

  points.forEach((p) => {
    svgHTML += `
      <g class="chart-point-group">
        <circle cx="${p.x}" cy="${p.y}" r="6" fill="#FFFFFF" stroke="#304A43" stroke-width="3" />
        <text x="${p.x}" y="${height - 12}" text-anchor="middle" fill="#66736E" font-size="11" font-weight="600">${p.label.replace('Semester ', 'Sem ')}</text>
        <text x="${p.x}" y="${p.y - 12}" text-anchor="middle" fill="#304A43" font-size="11" font-weight="700">${p.sgpa}</text>
      </g>
    `;
  });

  svgHTML += `</svg>`;
  container.innerHTML = svgHTML;
}

if (typeof window !== 'undefined') {
  window.renderAcademicChart = renderAcademicChart;
}
