// MoodCompanion component for mood tracking and suggestions
import { useState } from 'react';

function MoodCompanion() {
    const [message, setMessage] = useState('');

    const showMessage = (mood) => {
        if (mood === 'sad') setMessage("I'm sorry to hear that, it's okay not to be okay. Take it slow today!");
        else if (mood === 'okay') setMessage("Glad to hear that. Keep pushing forward!");
        else if (mood === 'hopeful') setMessage("Hold onto that hope, I'm certain brighter days are yet to come!");
        else setMessage("Take a deep breath and enjoy the moment. It's okay not to have all the answers for now!");
    };

    return (
        <section id="mood-companion" className="mood-companion">
                <h2>How are you feeling today?</h2>
                <div class="mood-buttons">
                    <button onclick="showMessage('sad')">Sad</button>
                    <button onclick="showMessage('okay')">Okay</button>
                    <button onclick="showMessage('hopeful')">Hopeful</button>
                    <button onclick="showMessage('no idea')">No Idea</button>
                </div>

                {message && (
                <div id="message-box" style="display:none; margin-top:20px;">
                    <p id="ai-message" style="font-weight:bold; color:darkgreen;"></p>
                </div>
                )}
             </section>

    );
}

export default MoodCompanion;