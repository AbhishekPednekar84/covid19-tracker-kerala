import React, { useContext } from "react";
import CovidContext from "../../context/covid/covidContext";
import CountUp from "react-countup";
import { generateCounts, generateDeltaCounts } from "./helpers/generateCounts";

const CardItem = () => {
  const covidContext = useContext(CovidContext);
  const { stateData, stateDataFetched } = covidContext;

  if (stateDataFetched) {
    var generatedStateCounts = generateCounts(stateData);
    var generatedDeltaCounts = generateDeltaCounts(stateData);

    var otherStateActive = stateData.filter((s) => {
      return s.district === "Other State";
    });
  }

  return (
    <div className="card-grid">
      {/* Confirmed */}
      <div id="confirmed" className="stat-card confirmed z-depth-1">
        <h3 className="card-item-heading">Confirmed</h3>

        {generatedStateCounts && (
          <p className="generated-counts red-text darken-3">
            <CountUp
              start={0}
              end={generatedStateCounts.confirmed}
              duration={4}
            />
          </p>
        )}

        {generatedDeltaCounts && generatedDeltaCounts.confirmed > 0 ? (
          <p className="generated-delta-counts red-text darken-3">
            (<i className="fas fa-arrow-up"></i>{" "}
            <CountUp
              start={0}
              end={generatedDeltaCounts.confirmed}
              duration={4}
            />
            )
          </p>
        ) : (
          <p className="generated-delta-counts red-text darken-3">
            (<i className="fas fa-arrow-up"></i> 0)
          </p>
        )}
      </div>

      {/* Active */}
      {generatedStateCounts && (
        <div id="active" className="stat-card active z-depth-1">
          <h3 className="card-item-heading">Active</h3>
          <p className="generated-counts indigo-text lighten-1">

            <CountUp
              start={0}
              end={generatedStateCounts.active - otherStateActive[0].active}
              duration={4}
            />
          </p>
        </div>
      )}

      {/* Recovered */}
      <div id="recovered" className="stat-card recovered z-depth-1">
        <h3 className="card-item-heading">Recovered</h3>

        {generatedStateCounts && (
          <p className="generated-counts teal-text accent-3">
            <CountUp
              start={0}
              end={generatedStateCounts.recovered}
              duration={4}
            />
          </p>
        )}

        {generatedDeltaCounts && generatedDeltaCounts.recovered > 0 ? (
          <p className="generated-delta-counts teal-text accent-3">
            (<i className="fas fa-arrow-up"></i>{" "}
            <CountUp
              start={0}
              end={generatedDeltaCounts.recovered}
              duration={4}
            />
            )
          </p>
        ) : (
          <p className="generated-delta-counts teal-text accent-3">
            (<i className="fas fa-arrow-up"></i> 0)
          </p>
        )}
      </div>

      {/* Deceased */}
      <div id="deceased" className="stat-card deceased z-depth-1">
        <h3 className="card-item-heading">Deceased</h3>

        {generatedStateCounts && (
          <p className="generated-counts brown-text lighten-2">
            <CountUp
              start={0}
              end={generatedStateCounts.deceased}
              duration={4}
            />
          </p>
        )}

        {generatedDeltaCounts && generatedDeltaCounts.deceased > 0 ? (
          <p className="generated-delta-counts brown-text lighten-2">
            (<i className="fas fa-arrow-up"></i>{" "}
            <CountUp
              start={0}
              end={generatedDeltaCounts.deceased}
              duration={4}
            />
            )
          </p>
        ) : (
          <p className="generated-delta-counts brown-text lighten-2">
            (<i className="fas fa-arrow-up"></i> 0)
          </p>
        )}
      </div>
    </div>
  );
};

export default CardItem;
