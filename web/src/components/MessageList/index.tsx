import styles from './styles.module.scss';
import { api } from '../../services/api'
import logoImg from '../../assets/logo.svg'
import { useEffect, useState } from 'react';

type Message = {
    id: string;
    text: string;
    user: {
        name: string;
        avatar_url: string;
    }
}

export function MessageList() {
    const [messages, setMessages] = useState<Message[]>([])

    useEffect(() => {
        api.get('messages/last3').then(response => {
            console.log(response.data);
        })
    }, [])

    return (
        <div className={styles.messageListWrapper}>
            <img src={logoImg} alt="DoWhile 2021" />
            <ul className={styles.messageList}>
                <li className={styles.message}>
                    <p className={styles.messageContent}>Não vejo a hora de começar esse evento, com certeza vai ser o melhor de todos os tempos, vamooo pra cima! 🔥🔥</p>
                    <div className={styles.messageUser}>
                        <div className={styles.userImage}>
                            <img src="https://github.com/mthonorio.png" alt="Matheus Honorio" />
                        </div>
                        <span>Matheus Honorio</span>
                    </div>
                </li>

                <li className={styles.message}>
                    <p className={styles.messageContent}>Não vejo a hora de começar esse evento, com certeza vai ser o melhor de todos os tempos, vamooo pra cima! 🔥🔥</p>
                    <div className={styles.messageUser}>
                        <div className={styles.userImage}>
                            <img src="https://github.com/mthonorio.png" alt="Matheus Honorio" />
                        </div>
                        <span>Matheus Honorio</span>
                    </div>
                </li>

                <li className={styles.message}>
                    <p className={styles.messageContent}>Não vejo a hora de começar esse evento, com certeza vai ser o melhor de todos os tempos, vamooo pra cima! 🔥🔥</p>
                    <div className={styles.messageUser}>
                        <div className={styles.userImage}>
                            <img src="https://github.com/mthonorio.png" alt="Matheus Honorio" />
                        </div>
                        <span>Matheus Honorio</span>
                    </div>
                </li>
            </ul>
        </div>
    )
}