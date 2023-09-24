export default function header({isSession}) {
    return (
        <header className="flex flex-row items-center justify-evenly px-4 py-2">
            <div>
                {
                    isSession ? <>userName
                    </> : <><p>Register now!!</p></>
                }
            </div>
            <div>
                <img
                    src="https://th.bing.com/th/id/R.bee386db72cc09b40961d78a4750c090?rik=YZqiz5TRuzJEmQ&riu=http%3a%2f%2f2.bp.blogspot.com%2f-sMr9v1npjp4%2fUrSUg9NsiiI%2fAAAAAAAAYmY%2f3vdhUocp50Q%2fs1600%2fimagenes-de-perro-blanco.jpg&ehk=hPTuoUwkUBNXYf2pNeb7Oy1Zyx%2fIMrLWsU1QIvDVN7I%3d&risl=&pid=ImgRaw&r=0"
                    className="w-11 h-11 cursor-pointer rounded-full object-cover"/>
            </div>
        </header>
    )
}