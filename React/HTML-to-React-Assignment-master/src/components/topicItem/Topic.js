
export default function Topic(props) {
    return (
        <a href="#" class="topic-btn">
            <div class="icon-box">
                <ion-icon name="server-outline"></ion-icon>
            </div>

            <p>{props.title}</p>
        </a>
    )
}
