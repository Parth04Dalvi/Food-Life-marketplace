🍏 <p align="center">Food-Life: Waste Reduction Marketplace</p>
<p align="center">
<i>A real-time, full-stack solution connecting local vendors with consumers to eliminate urban food waste.</i>
</p>

<p align="center">
<img src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white" />
<img src="https://img.shields.io/badge/FastAPI-005571?style=for-the-badge&logo=fastapi" />
<img src="https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white" />
</p>

📖 Overview
<p>
<b>Food-Life</b> is a <i>production-grade</i> marketplace built to bridge the gap between small-scale vendors and budget-conscious students. By facilitating <b>"Flash Sales"</b> for near-expiry goods, the platform reduces daily waste while providing affordable sustenance to the community.
</p>

🚀 Key Technical Pillars
<b>Real-Time Inventory</b>: Built with a <b>Next.js</b> frontend and <b>FastAPI</b> backend to ensure <i>sub-100ms</i> updates for time-sensitive deals.

<b>Spatial Intelligence</b>: Leverages <b>PostgreSQL</b> with <b>PostGIS</b> and <i>GIST indexing</i> for high-concurrency, location-based querying within a 1-mile radius.

<b>Geo-Fenced Notifications</b>: Integrates <b>Firebase Cloud Messaging (FCM)</b> to push <i>instant alerts</i> to users based on their real-time coordinates.

<b>Cloud-Native Design</b>: Fully containerized using <b>Docker Compose</b>, orchestrating the entire stack for <i>seamless deployment</i>.

🏗️ System Architecture
<p align="center">
</p>

<ol>
<li><b>Vendor Ingestion</b>: Shops list near-expiry items via the dashboard.</li>
<li><b>Spatial Mapping</b>: Locations are stored as <i>geographic points</i> in PostGIS.</li>
<li><b>Targeted Alerting</b>: FCM dispatches notifications to users within <i>1,609 meters</i> of the vendor.</li>
</ol>

⚙️ Installation
<p>To run the project locally using <b>Docker</b>, follow these steps:</p>

Bash
# 1. Clone the repository
git clone https://github.com/Parth04Dalvi/Food-Life-marketplace.git

# 2. Start the services
docker-compose up --build
<p align="center">
<i>Developed with ❤️ by <b>Parth Dalvi</b> | M.S. Computer Science @ Purdue University</i>
</p>
