import Contacts from "./components/Contact"




export default function App() {
  return (
    <div className="contacts">
      <Contacts
        img="./src/images/mr-whiskerson.png"
        name="Mr. Whiskerson"
        phone="(212) 555-1234"
        email="mr.whiskaz@catnap.meow"
      />
      <Contacts
        img="./src/images/fluffykins.png"
        name="Fluffykins"
        phone="(212) 555-2345"
        email="fluff@me.com"
      />
      <Contacts
        img="./src/images/felix.png"
        name="Felix"
        phone="(212) 555-4567"
        email="thecat@hotmail.com"
      />
      <Contacts
        img="./src/images/pumpkin.png"
        name="Pumpkin"
        phone="(0800) CAT KING"
        email="pumpkin@scrimba.com"
      />

    </div>
  )
}