import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    axios
      .get("http://4.224.186.213/evaluation-service/notifications", {
        headers: {
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJkaWd2aWpheXNpbmdoNjM5MzQ2QGdtYWlsLmNvbSIsImV4cCI6MTc4MTE3MTQzOSwiaWF0IjoxNzgxMTcwNTM5LCJpc3MiOiJBZmZvcmQgTWVkaWNhbCBUZWNobm9sb2dpZXMgUHJpdmF0ZSBMaW1pdGVkIiwianRpIjoiZDM3MDJmM2MtNDFkMC00MTQ5LWI4MTgtZjVlZmI4OTI4Y2FiIiwibG9jYWxlIjoiZW4tSU4iLCJuYW1lIjoiZGlndmlqYXkgc2luZ2giLCJzdWIiOiIzY2FjZjQ1Ny0zMzMzLTQyYWQtYmI4MS1kNDRjNmQxYWZhNDYifSwiZW1haWwiOiJkaWd2aWpheXNpbmdoNjM5MzQ2QGdtYWlsLmNvbSIsIm5hbWUiOiJkaWd2aWpheSBzaW5naCIsInJvbGxObyI6IjIzMDA0NjAxMDAwNTMiLCJhY2Nlc3NDb2RlIjoiQkFWRFNoIiwiY2xpZW50SUQiOiIzY2FjZjQ1Ny0zMzMzLTQyYWQtYmI4MS1kNDRjNmQxYWZhNDYiLCJjbGllbnRTZWNyZXQiOiJoV3dmV1JndmdGSHBUVGNFIn0.sNoHqiwWbVsg_A9JXWN_rDCWYkcCH_mJEJXXukqPaAA`,
        },
      })
      .then((res) => {
        console.log("API Response:", res.data);
        setNotifications(res.data.notifications || []);
      })
      .catch((err) => {
        console.log("Status:", err.response?.status);
        console.log("Error:", err.response?.data);
      });
  }, []);
  const priority = {
    Placement: 3,
    Result: 2,
    Event: 1,
  };

  const top10 = [...notifications]
    .sort((a, b) => {
      if (priority[b.Type] !== priority[a.Type]) {
        return priority[b.Type] - priority[a.Type];
      }

      return new Date(b.Timestamp) - new Date(a.Timestamp);
    })
    .slice(0, 10);

  return (
    <div>
      <h1>Top 10 Priority Notifications</h1>

      {top10.map((item) => (
        <div key={item.ID}>
          <h3>{item.Type}</h3>
          <p>{item.Message}</p>
          <small>{item.Timestamp}</small>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default App;