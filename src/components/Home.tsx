import React from "react";
import { DataComing } from "./propstypes";



function Home(props: DataComing) {
    return (  
        <div>
            {props.name} eğitimine hoşgeldiniz. Kurs sayısı: {props.courseNumber}
            {props.isBest ? (
                <p>En iyi React eğitimi bu eğitimim</p>
            ) : (
                <p>En iyi React eğitimi bu eğitimim değil ileride bu eğitim</p>
            )}
        </div>
    );
}

export default Home;