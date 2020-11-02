import React, { useState, useEffect } from 'react';
import { fetchDailyData } from '../../api/';
import { Line } from 'react-chartjs-2';

import styles from './Chart.module.css';

const Chart = ({ data: confirmed, recovered, deaths }, country) => {
	const [dailyData, setDailyData] = useState({});

	useEffect(() => {
		const fetchMyAPI = async () => {
			const initialDailyData = await fetchDailyData();

			setDailyData(initialDailyData);
		};

		fetchMyAPI();
	}, []);

	const lineChart = dailyData[0] ? (
		<Line
			data={{
				labels: dailyData.map(({ date }) => new Date(date).toLocaleDateString()),
				datasets: [
					{
						data: dailyData.map((data) => data.confirmed),
						label: 'Infected',
						borderColor: '#3333ff',
						fill: true,
					},
					{
						data: dailyData.map((data) => data.deaths),
						label: 'Deaths',
						borderColor: 'red',
						backgroundColor: 'rgba(255, 0, 0, 0.5)',
						fill: true,
					},
				],
				options: {
					scales: {
						yAxes: [
							{
								ticks: {
									reverse: true,
								},
							},
						],
					},
				},
			}}
		/>
	) : null;
	return <div className={styles.container}>{lineChart}</div>;
};

export default Chart;
