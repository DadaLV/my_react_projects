import persons from "../data/persons";
import Person from "./Person";

function Persons() {
  return (
    <div className="cards">
      {persons.map((person) => {
        return (
          /* <Person
            id={person.id}
            firstName={person.firstName}
            lastName={person.lastName}
            email={person.email}
            img={person.img}
            key={person.id}
          /> */
          <Person key={person.id} {...person} />
        );
      })}
    </div>
    )
}

export default Persons