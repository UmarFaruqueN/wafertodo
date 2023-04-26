import React, { useState } from "react";

export const useForm = (intialValue: any) => {
     const [value, setValue] = useState(intialValue);

     return [
          value,
          (event: React.ChangeEvent<HTMLInputElement>) => {
               setValue({
                    ...value,
                    [event.target.name]: event.target.value,
               });
          },
     ];
};
