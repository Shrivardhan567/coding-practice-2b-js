const Notification = (props) => {
  //  Write your code here.
  const { typeOfMsg, className, icon } = props;
  return (
    <div className={`${className}`}>
      <img src={icon} class="img" />
      <p>{typeOfMsg}</p>
    </div>
  );
};

const icon1 = "https://assets.ccbp.in/frontend/react-js/primary-icon-img.png";
const icon2 = "https://assets.ccbp.in/frontend/react-js/success-icon-img.png";
const icon3 = "https://assets.ccbp.in/frontend/react-js/warning-icon-img.png";
const icon4 = "https://assets.ccbp.in/frontend/react-js/danger-icon-img.png";

const element = (
  //  Write your code here.
  <div class="notifications-list">
    <h1 class="heading">Notifications</h1>
    <Notification
      typeOfMsg="Informational Message"
      className="infoMsg"
      icon={icon1}
    />
    <Notification typeOfMsg="Success Message" className="sucMsg" icon={icon2} />
    <Notification typeOfMsg="Warning Message" className="warMsg" icon={icon3} />
    <Notification typeOfMsg="Error Message" className="erMsg" icon={icon4} />
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
