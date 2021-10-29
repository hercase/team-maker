import ReactDatePicker from "react-datepicker";
import { setDefaultLocale, registerLocale } from "react-datepicker";
import { matchStore } from "../../../store";
import "react-datepicker/dist/react-datepicker.css";
import { es } from "date-fns/locale";
import styled from "styled-components";

registerLocale("es", es);
setDefaultLocale("es");

const DatePicker = () => {
  const { date, setDate } = matchStore();

  return (
    <StyledDatePicker>
      <span htmlFor="email" className="block text-sm font-medium text-gray-700">
        Fecha
      </span>
      <ReactDatePicker
        showTimeSelect
        selected={date}
        onChange={(date) => setDate(date)}
        timeClassName={() => "text-primary"}
        locale="es"
        timeInputLabel="Time:"
        dateFormat="dd/MM/yyyy HH:mm"
        className="rounded-md h-full p-2 block w-full shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm border-gray-300"
      />
    </StyledDatePicker>
  );
};

const StyledDatePicker = styled.div`
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  tab-size: 4;
  text-size-adjust: 100%;
  color: ${({ theme }) => theme.colors.paragraph};

  input {
    tab-size: 4;
    box-sizing: border-box;
    border-style: solid;
    font-family: inherit;
    margin: 0;
    color: inherit;
    appearance: none;
    background-color: #fff;
    border-width: 1px;
    padding: 0.5rem 0.75rem;
    display: block;
    width: 100%;
    border-radius: 0.375rem;
    font-size: 0.875rem;
    line-height: 1.25rem;
    margin-top: 4px;
    box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;

    &:focus {
      outline-color: ${({ theme }) => theme.colors.primary};
    }
  }
`;

export default DatePicker;
