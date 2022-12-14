import React from "react";
import "./styles.css";

interface IUser {
  userName: string;
  password: string;
  gender: string;
  children: boolean;
  country: string;
}

const defaultUser: IUser = {
  userName: "manhph",
  password: "123",
  gender: "woman",
  children: true,
  country: "VN",
};

function MultipleInputFieldsExample() {
  const [inputs, setInputs] = React.useState(defaultUser);

  //React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>
  const handleChange = (e: any) => {
    if (e.target.type === "checkbox") {
      setInputs((values) => ({
        ...values,
        [e.target.name]: e.target.checked,
      }));
    } else {
      setInputs((values) => ({ ...values, [e.target?.name]: e.target?.value }));
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(inputs);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="userName"
          placeholder="User Name"
          value={inputs.userName}
          onChange={handleChange}
        />
        <input
          type="text"
          name="password"
          placeholder="Password"
          value={inputs.password}
          onChange={handleChange}
        />
        <label className="mr-2" htmlFor="country">
          Country
        </label>
        <select name="country" value={inputs.country} onChange={handleChange}>
          <option value="VN">Vietnam</option>
          <option value="US">United State</option>
          <option value="JP">Japan</option>
        </select>

        <br />

        <label htmlFor="gender">Man</label>
        <input
          type="radio"
          name="gender"
          value="man"
          checked={inputs.gender === "man"}
          onChange={handleChange}
        />

        <label htmlFor="gender">Woman</label>
        <input
          type="radio"
          name="gender"
          value="woman"
          checked={inputs.gender !== "man"}
          onChange={handleChange}
        />

        <label htmlFor="children">Children</label>
        <input
          type="checkbox"
          name="children"
          checked={!!inputs.children}
          onChange={handleChange}
        />

        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default MultipleInputFieldsExample;
