import style from "./Form.module.css";

function Form(){
    return (
        <form>
            <div>
                <span>card number</span>
                <input type="text" />
            </div>
            <div>
                <span>card holder</span>
                <input type="text" />
            </div>
            <div>
                <div>
                    <span>expiration mm</span>
                    <select name="" id="">
                        <option value="" selected disabled>month</option>
                        <option value="01">01</option>
                        <option value="02">02</option>
                        <option value="03">03</option>
                        <option value="04">04</option>
                        <option value="05">05</option>
                        <option value="06">06</option>
                        <option value="07">07</option>
                        <option value="08">08</option>
                        <option value="09">09</option>
                        <option value="10">10</option>
                        <option value="11">11</option>
                        <option value="12">12</option>
                    </select>
                </div>
                <div>
                <span>expiration yy</span>
                    <select name="" id="">
                        <option value="" selected disabled>year</option>
                        <option value="2025">2025</option>
                        <option value="2026">2026</option>
                        <option value="2027">2027</option>
                        <option value="2028">2028</option>
                        <option value="2029">2029</option>
                        <option value="2030">2030</option>
                        <option value="2031">2031</option>
                        <option value="2032">2032</option>
                        <option value="2033">2033</option>
                        <option value="2034">2034</option>
                        <option value="2035">2035</option>
                        <option value="2036">2036</option>
                    </select>
                </div>
                <div>
                    <span>cvv</span>
                    <input type="text" />
                </div>
            </div>
            <input type="submit" value="submit" />
        </form>
    )
}

export default Form;