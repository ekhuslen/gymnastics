import React, { useState } from "react";
import cssAthletics from "./AthleticsJudging.module.css";
import { FaEdit, FaSave } from "react-icons/fa";

function AthleticsJudging() {
  const [selectedCompetition, setSelectedCompetition] = useState(null);
  const [scores, setScores] = useState({}); // Athletes' scores
  const [editingAthlete, setEditingAthlete] = useState(null); // Currently editing athlete ID
  const competitions = [
    {
      id: 1,
      name: "100m Sprint",
      athletes: [
        { id: "A1232", name: "Тамирчин 1", score: null },
        { id: "A223", name: "Тамиирчин 2", score: 1 },
      ],
    },
    {
      id: 2,
      name: "Long Jump",
      athletes: [
        { id: "A313", name: "Тамрчин 3", score: null },
        { id: "A414", name: "Тамирчин 4", score: null },
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
          <option value="">Тэмцээний төрөл сонгох</option>
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
              <th>Хувийн дугаар</th>
              <th>Тамирчны нэр</th>
              <th>Оноо</th>
              <th></th>
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
                      <button onClick={() => saveScore(athlete.id)}>
                      <FaSave />
                      </button>
                    ) : (
                      <button onClick={() => handleEditScore(athlete.id)}>
                        <FaEdit /> 
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
