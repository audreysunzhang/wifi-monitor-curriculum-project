import Calendar from "./Calendar";
import Location from "./Location"
import SubButton from "./SubButton"
import WifiRating from "./WifiRating";

export default function Submission() {
  // Your component logic here
  return (
    <div class = "leftwrapper">
      <div class = "textwrap">
          <div class = "datebox">
              <p>What is the date (MM/DD/YYYY)?</p>
              <Calendar></Calendar>
          </div>
          <div class = "locbox">
              <p>What is your location?</p>
              <Location></Location>
          </div>
          <div class = "wifibox">
              <p>What is the wifi rating?</p>
              <WifiRating></WifiRating>
          </div>
      </div>
      <SubButton></SubButton>
    </div>
  );
}


