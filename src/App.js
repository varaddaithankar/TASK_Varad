import Dropdown from "./Dropdown";
import "./styles.css";

export default function App() {
  const options = [
    { value: "Varad", label: "Varad" },
    { value: "blue", label: "Gaurav Thakur" },
    { value: "red", label: "Jimmy" },
    { value: "yellow", label: "Shergil" },
    { value: "orange", label: "Majnu" },
    { value: "pink", label: "Laila" },
    { value: "purple", label: "Narendra" },
    { value: "grey", label: "Modi" }
  ];

  return (
    <div className="App">
      <Dropdown
        isSearchable
        isMulti
        placeHolder="Add User...."
        options={options}
        onChange={(value) => console.log(value)}
      />
    </div>
  );
}
