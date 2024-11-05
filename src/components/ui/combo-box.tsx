"use client";

import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const CountryCodes = [
  { value: "AF", label: "Afghanistan", phoneCode: "+93" },
  { value: "AL", label: "Albania", phoneCode: "+355" },
  { value: "DZ", label: "Algeria", phoneCode: "+213" },
  { value: "AS", label: "American Samoa", phoneCode: "+1684" },
  { value: "AD", label: "Andorra", phoneCode: "+376" },
  { value: "AO", label: "Angola", phoneCode: "+244" },
  { value: "AI", label: "Anguilla", phoneCode: "+1264" },
  { value: "AG", label: "Antigua and Barbuda", phoneCode: "+1268" },
  { value: "AR", label: "Argentina", phoneCode: "+54" },
  { value: "AM", label: "Armenia", phoneCode: "+374" },
  { value: "AW", label: "Aruba", phoneCode: "+297" },
  { value: "AU", label: "Australia", phoneCode: "+61" },
  { value: "AT", label: "Austria", phoneCode: "+43" },
  { value: "AZ", label: "Azerbaijan", phoneCode: "+994" },
  { value: "BS", label: "Bahamas", phoneCode: "+1242" },
  { value: "BH", label: "Bahrain", phoneCode: "+973" },
  { value: "BD", label: "Bangladesh", phoneCode: "+880" },
  { value: "BB", label: "Barbados", phoneCode: "+1246" },
  { value: "BY", label: "Belarus", phoneCode: "+375" },
  { value: "BE", label: "Belgium", phoneCode: "+32" },
  { value: "BZ", label: "Belize", phoneCode: "+501" },
  { value: "BJ", label: "Benin", phoneCode: "+229" },
  { value: "BM", label: "Bermuda", phoneCode: "+1441" },
  { value: "BT", label: "Bhutan", phoneCode: "+975" },
  { value: "BO", label: "Bolivia", phoneCode: "+591" },
  {
    value: "BQ",
    label: "Bonaire, Sint Eustatius and Saba",
    phoneCode: "+5997",
  },
  { value: "BA", label: "Bosnia and Herzegovina", phoneCode: "+387" },
  { value: "BW", label: "Botswana", phoneCode: "+267" },
  { value: "BR", label: "Brazil", phoneCode: "+55" },
  { value: "IO", label: "British Indian Ocean Territory", phoneCode: "+246" },
  { value: "BN", label: "Brunei Darussalam", phoneCode: "+673" },
  { value: "BG", label: "Bulgaria", phoneCode: "+359" },
  { value: "BF", label: "Burkina Faso", phoneCode: "+226" },
  { value: "BI", label: "Burundi", phoneCode: "+257" },
  { value: "CV", label: "Cabo Verde", phoneCode: "+238" },
  { value: "KH", label: "Cambodia", phoneCode: "+855" },
  { value: "CM", label: "Cameroon", phoneCode: "+237" },
  { value: "CA", label: "Canada", phoneCode: "+1" },
  { value: "KY", label: "Cayman Islands", phoneCode: "+1345" },
  { value: "CF", label: "Central African Republic", phoneCode: "+236" },
  { value: "TD", label: "Chad", phoneCode: "+235" },
  { value: "CL", label: "Chile", phoneCode: "+56" },
  { value: "CN", label: "China", phoneCode: "+86" },
  { value: "CC", label: "Cocos Islands", phoneCode: "+61" },
  { value: "CO", label: "Colombia", phoneCode: "+57" },
  { value: "KM", label: "Comoros", phoneCode: "+269" },
  {
    value: "CD",
    label: "Congo, Democratic Republic of the",
    phoneCode: "+243",
  },
  { value: "CG", label: "Congo, Republic of the", phoneCode: "+242" },
  { value: "CK", label: "Cook Islands", phoneCode: "+682" },
  { value: "CR", label: "Costa Rica", phoneCode: "+506" },
  { value: "CI", label: "Côte d'Ivoire", phoneCode: "+225" },
  { value: "HR", label: "Croatia", phoneCode: "+385" },
  { value: "CU", label: "Cuba", phoneCode: "+53" },
  { value: "CW", label: "Curaçao", phoneCode: "+5999" },
  { value: "CY", label: "Cyprus", phoneCode: "+357" },
  { value: "CZ", label: "Czech Republic", phoneCode: "+420" },
  { value: "DK", label: "Denmark", phoneCode: "+45" },
  { value: "DJ", label: "Djibouti", phoneCode: "+253" },
  { value: "DM", label: "Dominica", phoneCode: "+1767" },
  { value: "DO", label: "Dominican Republic", phoneCode: "+1809" },
  { value: "EC", label: "Ecuador", phoneCode: "+593" },
  { value: "EG", label: "Egypt", phoneCode: "+20" },
  { value: "SV", label: "El Salvador", phoneCode: "+503" },
  { value: "GQ", label: "Equatorial Guinea", phoneCode: "+240" },
  { value: "ER", label: "Eritrea", phoneCode: "+291" },
  { value: "EE", label: "Estonia", phoneCode: "+372" },
  { value: "SZ", label: "Eswatini", phoneCode: "+268" },
  { value: "ET", label: "Ethiopia", phoneCode: "+251" },
  { value: "FK", label: "Falkland Islands (Malvinas)", phoneCode: "+500" },
  { value: "FO", label: "Faroe Islands", phoneCode: "+298" },
  { value: "FJ", label: "Fiji", phoneCode: "+679" },
  { value: "FI", label: "Finland", phoneCode: "+358" },
  { value: "FR", label: "France", phoneCode: "+33" },
  { value: "GF", label: "French Guiana", phoneCode: "+594" },
  { value: "PF", label: "French Polynesia", phoneCode: "+689" },
  { value: "GA", label: "Gabon", phoneCode: "+241" },
  { value: "GM", label: "Gambia", phoneCode: "+220" },
  { value: "GE", label: "Georgia", phoneCode: "+995" },
  { value: "DE", label: "Germany", phoneCode: "+49" },
  { value: "GH", label: "Ghana", phoneCode: "+233" },
  { value: "GI", label: "Gibraltar", phoneCode: "+350" },
  { value: "GR", label: "Greece", phoneCode: "+30" },
  { value: "GL", label: "Greenland", phoneCode: "+299" },
  { value: "GD", label: "Grenada", phoneCode: "+1473" },
  { value: "GP", label: "Guadeloupe", phoneCode: "+590" },
  { value: "GU", label: "Guam", phoneCode: "+1671" },
  { value: "GT", label: "Guatemala", phoneCode: "+502" },
  { value: "GG", label: "Guernsey", phoneCode: "+441481" },
  { value: "GN", label: "Guinea", phoneCode: "+224" },
  { value: "GW", label: "Guinea-Bissau", phoneCode: "+245" },
  { value: "GY", label: "Guyana", phoneCode: "+592" },
  { value: "HT", label: "Haiti", phoneCode: "+509" },
  { value: "VA", label: "Holy See", phoneCode: "+379" },
  { value: "HN", label: "Honduras", phoneCode: "+504" },
  { value: "HK", label: "Hong Kong", phoneCode: "+852" },
  { value: "HU", label: "Hungary", phoneCode: "+36" },
  { value: "IS", label: "Iceland", phoneCode: "+354" },
  { value: "IN", label: "India", phoneCode: "+91" },
  { value: "ID", label: "Indonesia", phoneCode: "+62" },
  { value: "IR", label: "Iran", phoneCode: "+98" },
  { value: "IQ", label: "Iraq", phoneCode: "+964" },
  { value: "IE", label: "Ireland", phoneCode: "+353" },
  { value: "IM", label: "Isle of Man", phoneCode: "+441624" },
  { value: "IL", label: "Israel", phoneCode: "+972" },
  { value: "IT", label: "Italy", phoneCode: "+39" },
  { value: "JM", label: "Jamaica", phoneCode: "+1876" },
  { value: "JP", label: "Japan", phoneCode: "+81" },
  { value: "JE", label: "Jersey", phoneCode: "+441534" },
  { value: "JO", label: "Jordan", phoneCode: "+962" },
  { value: "KZ", label: "Kazakhstan", phoneCode: "+7" },
  { value: "KE", label: "Kenya", phoneCode: "+254" },
  { value: "KI", label: "Kiribati", phoneCode: "+686" },
  {
    value: "KP",
    label: "Korea, Democratic People's Republic of",
    phoneCode: "+850",
  },
  { value: "KR", label: "Korea, Republic of", phoneCode: "+82" },
  { value: "KW", label: "Kuwait", phoneCode: "+965" },
  { value: "KG", label: "Kyrgyzstan", phoneCode: "+996" },
  { value: "LA", label: "Lao People's Democratic Republic", phoneCode: "+856" },
  { value: "LV", label: "Latvia", phoneCode: "+371" },
  { value: "LB", label: "Lebanon", phoneCode: "+961" },
  { value: "LS", label: "Lesotho", phoneCode: "+266" },
  { value: "LR", label: "Liberia", phoneCode: "+231" },
  { value: "LY", label: "Libya", phoneCode: "+218" },
  { value: "LI", label: "Liechtenstein", phoneCode: "+423" },
  { value: "LT", label: "Lithuania", phoneCode: "+370" },
  { value: "LU", label: "Luxembourg", phoneCode: "+352" },
  { value: "MO", label: "Macao", phoneCode: "+853" },
  { value: "MG", label: "Madagascar", phoneCode: "+261" },
  { value: "MW", label: "Malawi", phoneCode: "+265" },
  { value: "MY", label: "Malaysia", phoneCode: "+60" },
  { value: "MV", label: "Maldives", phoneCode: "+960" },
  { value: "ML", label: "Mali", phoneCode: "+223" },
  { value: "MT", label: "Malta", phoneCode: "+356" },
  { value: "MH", label: "Marshall Islands", phoneCode: "+1692" },
  { value: "MQ", label: "Martinique", phoneCode: "+596" },
  { value: "MR", label: "Mauritania", phoneCode: "+222" },
  { value: "MU", label: "Mauritius", phoneCode: "+230" },
  { value: "YT", label: "Mayotte", phoneCode: "+262" },
  { value: "MX", label: "Mexico", phoneCode: "+52" },
  { value: "FM", label: "Micronesia, Federated States of", phoneCode: "+691" },
  { value: "MD", label: "Moldova, Republic of", phoneCode: "+373" },
  { value: "MC", label: "Monaco", phoneCode: "+377" },
  { value: "MN", label: "Mongolia", phoneCode: "+976" },
  { value: "ME", label: "Montenegro", phoneCode: "+382" },
  { value: "MS", label: "Montserrat", phoneCode: "+1664" },
  { value: "MA", label: "Morocco", phoneCode: "+212" },
  { value: "MZ", label: "Mozambique", phoneCode: "+258" },
  { value: "MM", label: "Myanmar", phoneCode: "+95" },
  { value: "NA", label: "Namibia", phoneCode: "+264" },
  { value: "NR", label: "Nauru", phoneCode: "+674" },
  { value: "NP", label: "Nepal", phoneCode: "+977" },
  { value: "NL", label: "Netherlands", phoneCode: "+31" },
  { value: "NC", label: "New Caledonia", phoneCode: "+687" },
  { value: "NZ", label: "New Zealand", phoneCode: "+64" },
  { value: "NI", label: "Nicaragua", phoneCode: "+505" },
  { value: "NE", label: "Niger", phoneCode: "+227" },
  { value: "NG", label: "Nigeria", phoneCode: "+234" },
  { value: "NU", label: "Niue", phoneCode: "+683" },
  { value: "NF", label: "Norfolk Island", phoneCode: "+672" },
  { value: "KP", label: "North Korea", phoneCode: "+850" },
  { value: "MK", label: "North Macedonia", phoneCode: "+389" },
  { value: "MP", label: "Northern Mariana Islands", phoneCode: "+1670" },
  { value: "NO", label: "Norway", phoneCode: "+47" },
  { value: "OM", label: "Oman", phoneCode: "+968" },
  { value: "PK", label: "Pakistan", phoneCode: "+92" },
  { value: "PW", label: "Palau", phoneCode: "+680" },
  { value: "PS", label: "Palestine, State of", phoneCode: "+970" },
  { value: "PA", label: "Panama", phoneCode: "+507" },
  { value: "PG", label: "Papua New Guinea", phoneCode: "+675" },
  { value: "PY", label: "Paraguay", phoneCode: "+595" },
  { value: "PE", label: "Peru", phoneCode: "+51" },
  { value: "PH", label: "Philippines", phoneCode: "+63" },
  { value: "PN", label: "Pitcairn", phoneCode: "+64" },
  { value: "PL", label: "Poland", phoneCode: "+48" },
];

export function Combobox() {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild className="">
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className=" justify-between border-none hover:bg-stone-700/20 hover:text-white"
        >
          {value
            ? CountryCodes.find((code) => code.value === value)?.phoneCode
            : "Select Country..."}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0 border-stone-900 rounded-2xl">
        <Command className="bg-stone-900 text-white border-black">
          <CommandInput placeholder="Search Country..." />
          <CommandList>
            <CommandEmpty>No Country found.</CommandEmpty>
            <CommandGroup>
              {CountryCodes.map((code, i) => (
                <CommandItem
                  key={i}
                  value={code.value}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue);
                    setOpen(false);
                  }}
                  className="data-[selected='true']:bg-stone-800 data-[selected='true']:text-white"
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      value === code.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                  {code.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
