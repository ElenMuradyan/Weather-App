import { Button, Input } from "antd";

const SearchCity = () => {
    submitCityName = () => {

    };
return(
    <div>
        <Input placeholder="Enter The City Name"></Input>
        <Button htmlType="submit" onClick={SearchCity}>Search</Button>
    </div>
);
}