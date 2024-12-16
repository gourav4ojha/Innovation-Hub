import React from "react";
// import GitHubCalendar from "react-github-calendar";
import LeetCodeCalendar from 'leetcode-calendar';
import { Row } from "react-bootstrap";

function Github() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
      Data Structures and Algorithms (DSA) Problems Solved
      </h1>
      <div>
      <img src="https://leetcard.jacoblin.cool/Gourav_vishwakarma" alt="LeetCode Stats" />
      </div>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        Days I <strong className="purple">Code</strong>
      </h1>
      
      <LeetCodeCalendar
  username="Gourav_vishwakarma"
  blockSize={17}
  blockMargin={6}
  fontSize={16}/>
  classForValue={(value) => {
    if (!value) return "bg-gray-200"; // Light gray for empty blocks
    // Custom purple shades based on activity count
    switch (Math.min(value.count, 4)) {
      case 1:
        return "bg-purple-300"; // Light purple
      case 2:
        return "bg-purple-400"; // Medium purple
      case 3:
        return "bg-purple-500"; // Dark purple
      case 4:
        return "bg-purple-600"; // Very dark purple
      default:
        return "bg-gray-200"; // Default for empty
    }
  }}
    </Row>
  );
}

export default Github;
