export const Skeleton = (props) => {
    return (
        <div>
            <div className={props.darkMode ? 'card' : 'card light'}>
                <div className={props.darkMode ? 'card-header' : 'card-header light'}>
                    <p className={props.darkMode ? 'card-title' : 'card-title light'}></p>
                    <p className={props.darkMode ? 'card-date' : 'card-date light'}></p>
                </div>
                <p className='card-body skeleton'>ontrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, . . . Read More</p>
            </div>
            <div className={props.darkMode ? 'card' : 'card light'}>
                <div className={props.darkMode ? 'card-header' : 'card-header light'}>
                    <p className={props.darkMode ? 'card-title' : 'card-title light'}></p>
                    <p className={props.darkMode ? 'card-date' : 'card-date light'}></p>
                </div>
                <p className='card-body skeleton'>ontrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, . . . Read More</p>
            </div>
            <div className={props.darkMode ? 'card' : 'card light'}>
                <div className={props.darkMode ? 'card-header' : 'card-header light'}>
                    <p className={props.darkMode ? 'card-title' : 'card-title light'}></p>
                    <p className={props.darkMode ? 'card-date' : 'card-date light'}></p>
                </div>
                <p className='card-body skeleton'>ontrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, . . . Read More</p>
            </div>
        </div>
    )
}
