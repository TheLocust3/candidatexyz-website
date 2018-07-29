import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Text, MDCAutoInit } from 'candidatexyz-common-js/lib/elements';

import { setInvertedNavbar, setFloatingNavbar } from '../actions/global-actions';

class Privacy extends React.Component {

    componentWillMount() {
        this.props.dispatch(setInvertedNavbar(true));
        this.props.dispatch(setFloatingNavbar(false));
    }

    render() {
        return (
            <Text className='content' type='body1'>
                <Text type='headline4'>Privacy Policy</Text>

                <div>
                    <p>This privacy notice discloses the privacy practices for <Link to='/'>www.candidatexyz.com</Link>. This privacy notice applies solely to information collected by this website.</p><br />

                    <Text type='headline5'>Information Collection, Use, and Sharing</Text>
                    <p>We are the sole owners of the information collected on this site. We only have access to/collect information that you voluntarily give us via email or other direct contact from you. We will not sell or rent this information to anyone.</p>

                    <p>We will use your information to respond to you, regarding the reason you contacted us. We will not share your information with any third party outside of our organization, other than as necessary to fulfill your request, e.g. to ship an order.</p>

                    <p>Unless you ask us not to, we may contact you via email in the future to tell you about specials, new products or services, or changes to this privacy policy.</p><br />

                    <Text type='headline5'>Your Access to and Control Over Information</Text>
                    <p>You may opt out of any future contacts from us at any time. You can do the following at any time by contacting us via the email address given on our website:<br /><br />

                    See what data we have about you, if any.<br />
                    Change/correct any data we have about you.<br />
                    Have us delete any data we have about you.<br />
                    Express any concern you have about our use of your data.</p><br />

                    <Text type='headline5'>Security</Text>
                    <p>We take precautions to protect your information. When you submit sensitive information via the website, your information is protected both online and offline.</p>

                    <p>Wherever we collect sensitive information (such as credit card data), that information is encrypted and transmitted to us in a secure way. You can verify this by looking for a lock icon in the address bar and looking for "https" at the beginning of the address of the Web page.</p>

                    <p>While we use encryption to protect sensitive information transmitted online, we also protect your information offline. Only employees who need the information to perform a specific job (for example, billing or customer service) are granted access to personally identifiable information. The computers/servers in which we store personally identifiable information are kept in a secure environment.</p><br />

                    <Text type='headline5'>Registration</Text>
                    <p>In order to use this website, a user must first complete the registration form. During registration a user is required to give certain information (such as name and email address). This information is used to contact you about the products/services on our site in which you have expressed interest. At your option, you may also provide demographic information (such as gender or age) about yourself, but it is not required.</p><br />

                    <Text type='headline5'>Cookies</Text>
                    <p>We use "cookies" on this site. A cookie is a piece of data stored on a site visitor's hard drive to help us improve your access to our site and identify repeat visitors to our site. For instance, when we use a cookie to identify you, you would not have to log in a password more than once, thereby saving time while on our site. Cookies can also enable us to track and target the interests of our users to enhance the experience on our site. Usage of a cookie is in no way linked to any personally identifiable information on our site.</p><br />

                    <Text type='headline5'>Links</Text>
                    <p>This website contains links to other sites. Please be aware that we are not responsible for the content or privacy practices of such other sites. We encourage our users to be aware when they leave our site and to read the privacy statements of any other site that collects personally identifiable information.</p>

                    <p>If you feel that we are not abiding by this privacy policy, you should contact us immediately via <a href="mailto:jake.kinsella@gmail.com">email</a>.</p>
                </div>

                <MDCAutoInit />
            </Text>
        );
    }
}

export default connect()(Privacy);
