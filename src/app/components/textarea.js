import { useRef, useEffect } from 'react';

export default function Textarea(props) {
    const textareaRef = useRef(null);

    useEffect(() => {
		textareaRef.current.style.height = "280px";
		textareaRef.current.style.height = textareaRef.current.scrollHeight + "px";
	}, [props.value])

    return (
        <textarea {...props} ref={textareaRef}></textarea>
    );
}