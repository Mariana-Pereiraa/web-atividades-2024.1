import Planeta from "./Planeta";

const SistemaSolar = () => {
    return (
        // fragmento no lugar da div <>
        <> 
            <h2> Sistema Solar</h2>
            <hr></hr>
            <Planeta 
                nome = "Mercúrio"
                tipo= {"Rochoso"}
                ordem={"1"}
            />
            <hr></hr>
            <Planeta 
                nome = "Vênus"
                tipo= {"Rochoso"}
                ordem={"2"}
            />
            <hr></hr>
            <Planeta 
                nome = "Terra"
                tipo= {"Rochoso"}
                ordem={"3"}
            />
            <hr></hr>
            <Planeta 
                nome = "Marte"
                tipo= {"Rochoso"}
                ordem={"4"}
            />
            <hr></hr>
            <Planeta 
                nome = "Jùpiter"
                tipo= {"Gasoso"}
                ordem={"5"}
            />
            <hr></hr>
            <Planeta 
                nome = "Saturno"
                tipo= {"Gasoso"}
                ordem={"6"}
            />
            <hr></hr>
            <Planeta 
                nome = "Urano"
                tipo= {"Gasoso"}
                ordem={"7"}
            />
            <hr></hr>
            <Planeta 
                nome = "Netuno"
                tipo= {"Gasoso"}
                ordem={"8"}
            />
        </>
    )
}

export default SistemaSolar;