import React, { useState } from "react";
import cssAthletics from "./AthleticsJudging.module.css";

function AthleticsJudging() {
  const [selectedCompetition, setSelectedCompetition] = useState(null);
  const [scores, setScores] = useState({}); // Athletes' scores
  const [editingAthlete, setEditingAthlete] = useState(null); // Currently editing athlete ID
  const competitions = [
    {
      id: 1,
      name: "100m Sprint",
      athletes: [
        { id: "A1", name: "Athlete 1", score: null },
        { id: "A2", name: "Athlete 2", score: 1 },
      ],
    },
    {
      id: 2,
      name: "Long Jump",
      athletes: [
        { id: "A3", name: "Athlete 3", score: null },
        { id: "A4", name: "Athlete 4", score: null },
      ],
    },
  ];
  

  // Тэмцээнийг сонгоход харгалзах тамирчид авах
  const handleCompetitionChange = (event) => {
    const competitionId = parseInt(event.target.value, 10);
    setSelectedCompetition(
      competitions.find((comp) => comp.id === competitionId)
    );
    setScores({});
    setEditingAthlete(null);
  };

  // Тамирчны оноог хадгалах
  const handleScoreChange = (athleteId, score) => {
    setScores((prev) => ({
      ...prev,
      [athleteId]: score,
    }));
  };

  // Оноо оруулах талбарыг харуулах
  const handleEditScore = (athleteId) => {
    setEditingAthlete(athleteId);
  };

  // Оноог хадгалаад input-ыг нуух
  const saveScore = (athleteId) => {
    setEditingAthlete(null);
  };

  return (
    <div className={cssAthletics.athleticsJudging}>
      <h1>Тэмцээний мэдээлэл</h1>
      <div className={cssAthletics.controls}>
        <select onChange={handleCompetitionChange}>
          <option value="">Select Competition</option>
          {competitions.map((comp) => (
            <option key={comp.id} value={comp.id}>
              {comp.name}
            </option>
          ))}
        </select>
      </div>
      <div className={cssAthletics.athletesTable}>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Score</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {selectedCompetition &&
              selectedCompetition.athletes.map((athlete) => (
                <tr key={athlete.id}>
                  <td>{athlete.id}</td>
                  <td>{athlete.name}</td>
                  <td>
                    {editingAthlete === athlete.id ? (
                      <input
                        type="number"
                        placeholder="Enter score"
                        value={scores[athlete.id] || ""}
                        onChange={(e) =>
                          handleScoreChange(athlete.id, e.target.value)
                        }
                      />
                    ) : (
                      scores[athlete.id] || "-"
                    )}
                  </td>
                  <td>
                    {editingAthlete === athlete.id ? (
                      <button onClick={() => saveScore(athlete.id)}>Save</button>
                    ) : (
                      <button onClick={() => handleEditScore(athlete.id)}>
                        Edit Score
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            {!selectedCompetition && (
              <tr>
                <td colSpan="4">No competition selected</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AthleticsJudging;
