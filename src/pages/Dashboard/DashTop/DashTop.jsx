import Profile from "../../../components/Profile/Profile";


const DashTop = () => {
    return (
        <>
            <div className="flex justify-between items-center">
                <div>
                    <h5>ReactTask</h5>
                </div>
                <div>
                    <Profile />
                </div>
            </div>
        </>
    );
};

export default DashTop;