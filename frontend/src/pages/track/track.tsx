import TrackGraph from "../../components/TrackGraph/trackGraph.js";

const Track = () => {
  return (
    <div className="flex flex-col gap-4 p-4">
      <h1 className=" text-center  text-4xl sm:text-6xl font-bold text-teal-700">
        MEDITATION TRACK
      </h1>
      <div className="flex flex-col">
        <TrackGraph />
      </div>
    </div>
  );
};

export default Track;
