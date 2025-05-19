import * as React from "react";

import { cn } from "../../utils";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "./Command";
import { Popover, PopoverContent, PopoverTrigger } from "./Popover";

import { LuCheck, LuChevronDown } from "react-icons/lu";
import countries from "../../countries.json";

interface PhoneInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  onValueChange?: (value: {
    country: string;
    phoneNumber: string;
    fullNumber: string;
  }) => void;
}

export function PhoneInput({ onValueChange, ...props }: PhoneInputProps) {
  const [open, setOpen] = React.useState(false);
  const [selectedCountry, setSelectedCountry] = React.useState({
    code: "MA",
    name: "Morocco",
    flag: "🇲🇦",
    dialCode: "+212",
  });
  const [phoneNumber, setPhoneNumber] = React.useState("");

  const formatPhoneNumber = (value: string) => {
    const digits = value.replace(/\D/g, "");

    if (digits.length <= 3) {
      return digits;
    } else if (digits.length <= 6) {
      return `${digits.slice(0, 3)}-${digits.slice(3)}`;
    } else {
      return `${digits.slice(0, 3)}-${digits.slice(3, 6)}-${digits.slice(
        6,
        10
      )}`;
    }
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const formattedValue = formatPhoneNumber(value);
    setPhoneNumber(formattedValue);

    if (onValueChange) {
      onValueChange({
        country: selectedCountry.code,
        phoneNumber: formattedValue,
        fullNumber: `${selectedCountry.dialCode} ${formattedValue}`,
      });
    }
  };

  const handleCountryChange = (country: (typeof countries)[0]) => {
    setSelectedCountry(country);
    setOpen(false);

    if (onValueChange) {
      onValueChange({
        country: country.code,
        phoneNumber: phoneNumber,
        fullNumber: `${country.dialCode} ${phoneNumber}`,
      });
    }
  };

  return (
    <div
      className={
        "flex items-center gap-x-2 border border-[#949494]/50 xl:border-none rounded-full h-13 px-4 py-3.5 xl:p-0 w-full xl:w-auto"
      }
    >
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <div className="flex items-center">
            <button
              role="combobox"
              aria-expanded={open}
              className="w-16 flex gap-x-2 items-center border-r-0 rounded-r-none"
            >
              <span className="flex items-center gap-2 truncate">
                <span className="text-3xl">{selectedCountry.flag}</span>
              </span>
              <LuChevronDown className="h-6 w-6 shrink-0 opacity-50" />
            </button>
            <span className="hidden sm:inline">{selectedCountry.dialCode}</span>
          </div>
        </PopoverTrigger>
        <PopoverContent className="w-[250px] p-0 ">
          <Command>
            <CommandInput placeholder="Search country..." />
            <CommandList>
              <CommandEmpty>No country found.</CommandEmpty>
              <CommandGroup className="max-h-[300px] overflow-y-auto">
                {countries.map((country) => (
                  <CommandItem
                    key={country.code}
                    value={`${country.name} ${country.dialCode}`}
                    onSelect={() => handleCountryChange(country)}
                    className="flex items-center gap-2"
                  >
                    <div className="flex items-center gap-2 w-full">
                      <span className="text-base">{country.flag}</span>
                      <span>{country.name}</span>
                      <span className="text-muted-foreground ml-auto">
                        {country.dialCode}
                      </span>
                    </div>
                    <LuCheck
                      className={cn(
                        "ml-auto h-4 w-4",
                        selectedCountry.code === country.code
                          ? "opacity-100"
                          : "opacity-0"
                      )}
                    />
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
      <input
        type="tel"
        placeholder="Phone number"
        className="rounded-l-none outline-none border-0 focus-visible:ring-0 focus-visible:border-0"
        value={phoneNumber}
        onChange={handlePhoneChange}
        {...props}
      />
    </div>
  );
}
