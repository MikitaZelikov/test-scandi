import { Checkout as SourceCheckout } from 'SourceRoute/Checkout/Checkout.component';
import './Checkout.extension.style.scss';

export default class Checkout extends SourceCheckout {

    renderSteps() {
        const { checkoutStep } = this.props;
        const steps = Object.values(this.stepMap);
        const title = (x) => {
            return x.url.substring(1);
        };

        return (
            <div className="checkout-overriding">
                {
                    steps.slice(0, -1).map((item, i) => (
                        <div key={i} className="checkout-steps">
                            <div className="checkout-line"></div>
                            <div className="checkout-point">
                                <p className="checkout-point__number">{i + 1}</p>
                                <p className="checkout-point__title">{title(item)}</p>
                            </div>
                        </div>))
                }
            </div>
        )
    }

    render() {
        return (
            <React.Fragment>
                {this.renderSteps()}
                {super.render()};
            </React.Fragment>
        );
    }
}