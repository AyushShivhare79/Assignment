"use client";

import { Button } from "@/components/ui/button";
import { InputData } from "./components/Input";
import Heading from "./components/Heading";
import Select from "./components/Select";
import TextArea from "./components/TextArea";
import { useEffect, useState } from "react";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const Dashboard = () => {
  const [checkIn, setCheckIn] = useState([{}]);

  const [ssno, setSsno] = useState<Record<any, any>>({});

  const [adminId, setAdminId] = useState<string>();
  const [products, setProducts] = useState<string>();
  const [productsQuantity, setProductsQuantity] = useState<number>();
  const [usage, setUsage] = useState<string>();
  const [reason, setReason] = useState<string>();
  const [description, setDescription] = useState<string>();

  const [disabled, setDisabled] = useState<boolean>(false);
  const handleClick = () => {
    setDisabled(true);
    const data = {
      adminId,
      products,
      usage,
      reason,
      description,
    };
    setCheckIn([...checkIn, { ...data }]);
  };

  useEffect(() => {
    if (!productsQuantity) return;
    let obj: Record<any, any> = {};
    for (let i = 1; i <= Number(productsQuantity); i++) {
      obj[i] = "";
    }
    setSsno(obj);
  }, [productsQuantity]);

  const onCheckinComplete = (e: any) => {
    e.preventDefault();
    const completeProduct = checkIn.map((m) => ({ ...m, ssno }));
    console.log("completeProduct: ", completeProduct);
  };

  // const onFieldInput = (i: any) => {};
  // useEffect(() => {
  //   console.log(ssno);
  // }, [ssno]);

  return (
    <>
      {JSON.stringify(ssno)}

      <div className="flex px-14 pt-5 border">
        <div className="w-3/5 border">
          <div className="flex flex-col gap-5">
            <Heading />
            <InputData
              type={"string"}
              label={"Admin/ ID"}
              disabled={disabled}
              onChange={(e: any) => setAdminId(e.target.value)}
            />

            {/* Issue hai yaha */}

            <div className="flex items-center gap-5">
              <Select
                label={"Products"}
                onChange={(e: any) => setProducts(e)}
                disabled={disabled}
              />
              <InputData
                type={"number"}
                label={"Quantity"}
                disabled={disabled}
                onChange={(e: any) => setProductsQuantity(e.target.value)}
              />
              <Button onClick={handleClick}>Serial number</Button>
            </div>

            <div className="flex justify-center items-center hover:cursor-pointer bg-blue-500 text-white h-7 text-sm rounded-3xl w-20">
              Add new
            </div>

            {/* Issue hai yaha */}

            <div className="flex items-center gap-5">
              <InputData
                type={"text"}
                label={"Usage"}
                disabled={disabled}
                onChange={(e: any) => setUsage(e.target.value)}
              />
              <Select
                label={"Reason"}
                onChange={(e: any) => setReason(e)}
                disabled={disabled}
              />
            </div>

            <div className="pt-5">
              <TextArea
                label="Description"
                onChange={(e: any) => setDescription(e.target.value)}
                disabled={disabled}
              />
            </div>
          </div>
        </div>
        <div className=" w-2/5   border">
          <div>Serial number of </div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">Checkbox</TableHead>
                <TableHead>#</TableHead>
                <TableHead>SERIAL NUMBER</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {Object.keys(ssno).map((key, index) => (
                <TableRow key={key}>
                  <TableCell>{index}</TableCell>
                  <TableCell>
                    <input
                      type="text"
                      className="border rounded h-7"
                      placeholder="Type..."
                      onChange={(e) => {
                        setSsno((prev) => {
                          let newObj = { ...prev };
                          newObj[key] = e.target.value;
                          return newObj;
                        });
                      }}
                    />
                    {/* <button onClick={() => onFieldInput(index)}>Update</button> */}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
      <Button className="ml-14 mt-2" onClick={onCheckinComplete}>
        CheckIn
      </Button>
    </>
  );
};

export default Dashboard;
