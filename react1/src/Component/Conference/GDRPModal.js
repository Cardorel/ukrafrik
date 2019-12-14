import React from 'react'

export default function GDRPModal(props) {
    return (
        <div>
            <div className="Modal-GDRP-container">
                <div className="Modal-GDRP-content">
                    <p className="Para-GDRP">Personal Data Protection Policy in accordance with the General Data Protection Regulation (GDPR)</p>
                    <div className="Modal-GDRP-Para">
                        <p>Personal Data Protection Policy in accordance with the General Data Protection Regulation (GDPR)

When you use Hotel “UkrafriK’ website, we may request your personal data, which include: your name and contact information, date of birth, place of work and your position, gender, nationality, mobile phone number, postal address and email address; information about the documents required for identification (for example, passport number and series, its validity period), credit card details, arrival and departure dates, your preferences when checking in the hotel, any other information that you voluntarily leave on the official website.

Your personal data may be used to provide the services you request: room reservation, membership in Loyalty Programs, newsletters and special offers. Your personal data can also be used to improve the quality of services at the Hotel “UkrafriK”, perform marketing research, send out invitations and inform about new services at the Hotel “UkrafriK”.

Information may be provided to third parties in exceptional cases provided for by the current legislation of Ukraine, international regulations with direct force, governing personal data of individuals, only with your consent.

Hotel “UkrafriK’ cannot guarantee complete protection of your personal data, but will make every effort to protect your personal data on the highest level.

For all questions related to processing, storage and use of personal data, please send a request by e-mail to: contact@ukrafrik.com

We receive and store any information that you enter on the official website, only to the extent necessary for the provision of services. Further, personal data may be collected and processed automatically when you use this website (for example, through cookies).

If you make a reservation of services and/or make a payment on behalf of or in the interests of third parties, the information you provide about these third parties is collected and processed by the Hotel “UkrafriK” under the same conditions, on which your personal data are processed. By providing such information about third parties, you confirm that this third party is aware of these conditions and understands their consequences, and also gives unconditional and complete consent to the collection and processing of their personal data in accordance with this Privacy Policy, and agrees that access to such information is possible from your account.

To the extent necessary for proper provision of services chosen and booked by you, we transfer your personal data to third parties, as indicated below, since the services cannot be provided without such transfer. Hotel “UkrafriK’ has the right to transfer your personal data to the following agents to the extent necessary for providing selected or reserved services, which provide the services you have reserved. Please note that such companies may contact you to obtain additional information about you, assist you with booking services or respond to your comments as far as it concerns the provision of services.

We make every effort so that you can visit and use our website as securely as possible. Therefore, we adhere to the provisions of Article 32 of General Data Protection Regulation (hereinafter referred to as GDPR) to ensure the protection and security of personal data.

In accordance with GDPR, you have the right to make corrections and delete your personal data. In such cases, please contact us directly.</p>
                    </div>
                    <div className="btn-GDRP">
                        <button onClick={() => {props.onBtnClick() ; props.onBtnClickedAccept()}} className="btn-accept">I ACCEPT</button>
                        <button onClick={() => {props.onBtnClick() ; props.onBtnClickedDecline()}}  className="btn-decline">I DECLINE</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
