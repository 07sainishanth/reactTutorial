import 'bulma/css/bulma.css'
import ProfileCard from "./ProfileCard";
import AlexaImage from "./images/alexa.png";
import CortonaImage from "./images/cortana.png";
import SiriImage from "./images/siri.png";

function App() {
    // const alexa = {
    //     title : "Alexa",
    //     handle: "@alexa99"
    // }

    // const cortona = {
    //     title : "Cortana",
    //     handle: "@cortona32"
    // }

    // const siri = {
    //     title : "Siri",
    //     handle: "@siri01"
    // }
    // console.log(AlexaImage)
    // console.log(CortonaImage)
    // console.log(SiriImage)

    return (
        <div>
            <section className='hero is-primary'>
                <div className='hero-body'>
                    <p className='title'>Personal Digital Assistant</p>
                </div>
            </section>

            {/* <img src="https://url" /> */}
            <div className="container">
                <section className="section">
                    <div className="columns">
                        <div className='column is-4'>
                            <ProfileCard  
                            title="Alexa" 
                            handle="@alexa99" 
                            image={AlexaImage}
                            description="Alexa is a PA scam. Its alwaya selling our information, privacy ...?"
                            />
                        </div>
                        <div className='column is-4'>
                            <ProfileCard title="Cortona"
                             handle="@cortona32"
                             image={CortonaImage} 
                             description="it just exisits. Its alwaya selling our information LOL?"
                             />
                        </div>
                        <div className='column is-4'>
                            <ProfileCard title="Siri" 
                            handle="@siri01"
                            image={SiriImage}
                            description="it's always listening. Its alwaya selling our information, privacy ...?"
                            />
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default App;