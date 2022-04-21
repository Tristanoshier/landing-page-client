export const Main = (props) => {
    return (
        <div className='main'>
            <p className={props.colorMode('intro', 'intro light')}><span id='welcome-header'>Hello!</span><br />I'm Tristan,<br />a software engineer<br />working remotely<br/>while traveling the world.</p>

            {/* svg waves */}
            <svg className='waves' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'>
                <path fill={props.colorMode('var(--cornflowerblue)', 'var(--cornflowerblue)')} fillOpacity='1' d='M0,288L26.7,282.7C53.3,277,107,267,160,234.7C213.3,203,267,149,320,138.7C373.3,128,427,160,480,181.3C533.3,203,587,213,640,234.7C693.3,256,747,288,800,261.3C853.3,235,907,149,960,101.3C1013.3,53,1067,43,1120,74.7C1173.3,107,1227,181,1280,181.3C1333.3,181,1387,107,1413,69.3L1440,32L1440,320L1413.3,320C1386.7,320,1333,320,1280,320C1226.7,320,1173,320,1120,320C1066.7,320,1013,320,960,320C906.7,320,853,320,800,320C746.7,320,693,320,640,320C586.7,320,533,320,480,320C426.7,320,373,320,320,320C266.7,320,213,320,160,320C106.7,320,53,320,27,320L0,320Z'></path>
            </svg>

        </div>
    )
}
