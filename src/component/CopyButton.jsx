import React, { useState } from 'react';

// function CopyButton({textToCopy}) {
//     const [copied, setCopied] = useState(false);
//
//     const handleCopyClick = () => {
//
//         // Create a textarea element to hold the text temporarily
//         const textArea = document.createElement('textarea');
//         textArea.value = textToCopy;
//         document.body.appendChild(textArea);
//
//         // Select the text in the textarea
//         textArea.select();
//
//         // Execute the copy command
//         document.execCommand('copy');
//
//         // Remove the textarea from the DOM
//         document.body.removeChild(textArea);
//
//         // Update the copied state
//         setCopied(true);
//     };
//
//     return (
//         <div style={{width:500}}>
//             <button onClick={handleCopyClick}>Copy Text</button>
//             {copied && <span>Copied to clipboard!</span>}
//         </div>
//     );
// }

function CopyButton({textToCopy}) {
    const [copied, setCopied] = useState(false);

    const handleCopyToClipboard = () => {
        navigator.clipboard.writeText(textToCopy);
        setCopied(true);
    };

    return (
        <div>
            <h4>Copy the link to join to the meeting</h4>
            <input
                type="text"
                value={textToCopy}
                // disabled={true}
                multiple={true}
            />
            <button onClick={handleCopyToClipboard}>Copy to Clipboard</button>
            {copied && <span>Copied to clipboard!</span>}
        </div>
    );
}

export default CopyButton;
