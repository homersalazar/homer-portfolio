const ResponsiveMockupCode = () => {
    return (
        <>
            {/* Desktop and Tablet Version */}
            <div className="mockup-code w-full max-w-full text-sm hidden sm:block">
                <pre data-prefix="1"><code><span className="text-[var(--cyan)]">&#60;p&#62;</span></code></pre>
                <pre data-prefix="2"><code><span className="text-2xl text-[var(--cyan)]">Hello!</span></code></pre>
                <pre data-prefix="3"><code></code></pre>
                <pre data-prefix="4"><code>My name is Homer Salazar</code></pre>
                <pre data-prefix="5"><code>and I am passionate in web development that utilizes <span className="text-[var(--cyan)]">HTML</span>, <span className="text-[var(--cyan)]">CSS</span>, <span className="text-[var(--cyan)]">JS</span>, and <span className="text-[var(--cyan)]">PHP</span>, etc.</code></pre>
                <pre data-prefix="6"><code></code></pre>
                <pre data-prefix="7"><code>I am a highly motivated individual and an eternal optimist,</code></pre>
                <pre data-prefix="8"><code>dedicated to writing clear, concise, robust code that works.</code></pre>
                <pre data-prefix="9"><code>Striving to never stop learning and improving.</code></pre>
                <pre data-prefix="10"><code></code></pre>
                <pre data-prefix="11"><code>My goals are to build and deploy web applications,</code></pre>
                <pre data-prefix="12"><code>participate in code reviews and bug hunting,</code></pre>
                <pre data-prefix="13"><code>optimize and refactor code, collaborate with teams, and stay updated on tech trends.</code></pre>
                <pre data-prefix="14"><code></code></pre>
                <pre data-prefix="15"><code><span className="text-[var(--cyan)]">&#60;/p&#62;</span></code></pre>
            </div>

            {/* Mobile Version */}
            <div className="min-h-auto">
                <div className="mockup-code w-full max-w-full text-sm sm:hidden">
                    <pre data-prefix="1"><code><span className="text-[var(--cyan)]">&#60;p&#62;</span></code></pre>
                    <pre data-prefix="2"><code><span className="text-2xl text-[var(--cyan)]">Hello!</span></code></pre>
                    <pre data-prefix="3"><code></code></pre>
                    <pre data-prefix="4"><code>My name is Homer Salazar</code></pre>
                    <pre data-prefix="5"><code>and I am passionate in web</code></pre>
                    <pre data-prefix="6"><code>development that utilizes</code></pre>
                    <pre data-prefix="7"><code><span className="text-[var(--cyan)]">HTML</span>, <span className="text-[var(--cyan)]">CSS</span>, <span className="text-[var(--cyan)]">JS</span>, and <span className="text-[var(--cyan)]">PHP</span>, etc.</code></pre>
                    <pre data-prefix="8"><code></code></pre>
                    <pre data-prefix="9"><code>I am a highly motivated individual</code></pre>
                    <pre data-prefix="10"><code>and an eternal optimist,</code></pre>
                    <pre data-prefix="11"><code>dedicated to writing clear,</code></pre>
                    <pre data-prefix="12"><code>concise, robust code that works.</code></pre>
                    <pre data-prefix="13"><code>Striving to never stop learning</code></pre>
                    <pre data-prefix="14"><code>and improving.</code></pre>
                    <pre data-prefix="15"><code></code></pre>
                    <pre data-prefix="16"><code>My goals are to build and deploy</code></pre>
                    <pre data-prefix="17"><code>web applications, participate in</code></pre>
                    <pre data-prefix="18"><code>code reviews and bug hunting,</code></pre>
                    <pre data-prefix="19"><code>optimize and refactor code,</code></pre>
                    <pre data-prefix="20"><code>collaborate with teams, and stay</code></pre>
                    <pre data-prefix="21"><code>updated on tech trends.</code></pre>
                    <pre data-prefix="22"><code></code></pre>
                    <pre data-prefix="23"><code><span className="text-[var(--cyan)]">&#60;/p&#62;</span></code></pre>
                </div>
            </div>

        </>
    );
};

export default ResponsiveMockupCode;