import React, { useState } from "react";
import cssAthletics from "./AthleteList.module.css";
import { FaEdit, FaSave } from "react-icons/fa";

function AthleteList({ isViewer }) { 
  const [selectedCompetition, setSelectedCompetition] = useState(null);
  const [scores, setScores] = useState({});
  const [editingAthlete, setEditingAthlete] = useState(null);
  const competitions = [
    {
      id: 1,
      name: "100m Sprint",
      athletes: [
        { id: "A1232", name: "Тамирчин 1", score: null },
        { id: "A223", name: "Тамирчин 2", score: 1 },
      ],
    },
    {
      id: 2,
      name: "Long Jump",
      athletes: [
        { id: "A313", name: "Тамирчин 3", score: null },
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

  // Оноо оруулах талбарыг харуулах
  const handleEditScore = (athleteId) => {
    if (!isViewer) {
      setEditingAthlete(athleteId);
    }
  };

  // Оноог хадгалаад input-ыг нуух
  const saveScore = (athleteId) => {
    if (!isViewer) {
      setEditingAthlete(null);
    }
  };

  // Оноо өөрчлөх
  const handleScoreChange = (athleteId, score) => {
    setScores((prev) => ({
      ...prev,
      [athleteId]: score,
    }));
  };

  return (
    <div className={cssAthletics.athleticsJudging}>
      <h1>Тэмцээний мэдээлэл</h1>
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
                    {editingAthlete === athlete.id && !isViewer ? (
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
                    {!isViewer && editingAthlete === athlete.id ? (
                      <button onClick={() => saveScore(athlete.id)}>
                        <FaSave />
                      </button>
                    ) : (
                      !isViewer && (
                        <button onClick={() => handleEditScore(athlete.id)}>
                          <FaEdit />
                        </button>
                      )
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

export default AthleteList;
