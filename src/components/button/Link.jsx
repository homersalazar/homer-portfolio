export default function Link({ label, link }) {
    return (
        <>
            <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="relative px-5 py-2.5 rounded-xl hover:bg-[var(--cyan)] hover:text-black hover:font-medium cursor-pointer hover:scale-110 transition-transform duration-200"
                style={{
                    boxShadow: "inset 0 0 0 1px var(--cyan), 0 0 0 1.5px #e6f6f6", 
                }}
            >
                {label}
            </a>
        </>
    );
}