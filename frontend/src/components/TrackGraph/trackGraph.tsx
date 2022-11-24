import { useEffect, useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "../../redux/store.js";
import { fetchTracks } from "../../redux/track/track";

import { VictoryChart, VictoryBar } from "victory";

const TrackGraph = () => {
  const data = useSelector((state: RootState) => state.track.data);
  const trackstatus = useSelector((state: RootState) => state.track.status);
  const dispatch = useDispatch();

  const [track, setTrack] = useState([
    { x: "Jan", y: 0 },
    { x: "Feb", y: 0 },
    { x: "Mar", y: 0 },
    { x: "Apr", y: 0 },
    { x: "May", y: 0 },
    { x: "Jun", y: 0 },
    { x: "Jul", y: 0 },
    { x: "Aug", y: 0 },
    { x: "Sep", y: 0 },
    { x: "Oct", y: 0 },
    { x: "Nov", y: 0 },
    { x: "Dec", y: 0 },
  ]);

  useEffect(() => {
    if (trackstatus === "suceeded") {
      console.log("DATA=> ", data);
      const jan = data.filter((i) => i.createdAt.slice(5, 7) === "01").length;
      const feb = data.filter((i) => i.createdAt.slice(5, 7) === "02").length;
      const mar = data.filter((i) => i.createdAt.slice(5, 7) === "03").length;
      const apr = data.filter((i) => i.createdAt.slice(5, 7) === "04").length;
      const may = data.filter((i) => i.createdAt.slice(5, 7) === "05").length;
      const jun = data.filter((i) => i.createdAt.slice(5, 7) === "06").length;
      const jul = data.filter((i) => i.createdAt.slice(5, 7) === "07").length;
      const aug = data.filter((i) => i.createdAt.slice(5, 7) === "08").length;
      const sep = data.filter((i) => i.createdAt.slice(5, 7) === "09").length;
      const oct = data.filter((i) => i.createdAt.slice(5, 7) === "10").length;
      const nov = data.filter((i) => i.createdAt.slice(5, 7) === "11").length;
      const dec = data.filter((i) => i.createdAt.slice(5, 7) === "12").length;
      setTrack([
        { x: "Jan", y: jan },
        { x: "Feb", y: feb },
        { x: "Mar", y: mar },
        { x: "Apr", y: apr },
        { x: "May", y: may },
        { x: "Jun", y: jun },
        { x: "Jul", y: jul },
        { x: "Aug", y: aug },
        { x: "Sep", y: sep },
        { x: "Oct", y: oct },
        { x: "Nov", y: nov },
        { x: "Dec", y: dec },
      ]);
    } else {
      dispatch(fetchTracks());
    }
  }, [data, setTrack]);
  return (
    <div className="p-4 self-center font-bold">
      <VictoryChart width={1500} height={600} domainPadding={10}>
        <VictoryBar
          alignment="start"
          data={track}
          style={{
            data: { fill: "#0f766e" },
            labels: {
              fontSize: 15,
            },
          }}
          labels={({ datum }) => `${datum.y}`}
        />
      </VictoryChart>
    </div>
  );
};

export default TrackGraph;
