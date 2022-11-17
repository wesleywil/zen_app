import { useSelector } from "react-redux";
import type { RootState } from "../../redux/store.js";
import { VictoryChart, VictoryBar, VictoryTheme } from "victory";

import { dataGraphic } from "../../data.js";

const Track = () => {
  const track = useSelector((state: RootState) => state.track.listTrack);
  return (
    <div className="flex flex-col gap-4 p-4">
      <h1 className=" text-center  text-4xl sm:text-6xl font-bold text-teal-700">
        MEDITATION TRACK
      </h1>
      <div className="flex flex-col">
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
      </div>
    </div>
  );
};

export default Track;
