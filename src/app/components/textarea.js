import { useRef, useEffect } from 'react';

export default function Textarea(props) {
    const textareaRef = useRef(null);

    useEffect(() => {
		console.log(textareaRef.current.scrollHeight);
		textareaRef.current.style.height = "auto";
		textareaRef.current.style.height = textareaRef.current.scrollHeight + "px";
	}, [props.value])

    return (
        <textarea {...props} ref={textareaRef}></textarea>
    );
}