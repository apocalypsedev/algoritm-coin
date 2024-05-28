
import { useState } from "react";
import { LuPencil } from "react-icons/lu";
import { IoIosSearch } from "react-icons/io";
import {
  Card,
  CardHeader,
  Input,
  Typography,
  Button,
  CardBody,
  Chip,
  CardFooter,
  Tabs,
  TabsHeader,
  Tab,
  Avatar,
  IconButton,
  Tooltip,
} from "@material-tailwind/react";
 
const TABS = [
  {
    label: "All",
    value: "all",
  },
  {
    label: "Web",
    value: "web",
  },
  {
    label: "En",
    value: "en",
  },
  {
    label: "Ru",
    value: "ru",
  },
  
];
 
const TABLE_HEAD = ["Member", "Function", "Status", "Employed", ""];
 
const TABLE_ROWS = [
  {
    name: "John Michael",
    job: "Manager",
    date: "23/04/18",
  },
  {
    name: "Alexa Liras",
    job: "Developer",
    date: "23/04/18",
  },
  {
    name: "Laurent Perrier",
    job: "Executive",
    date: "19/09/17",
  },
  {
    name: "Michael Levi",
    job: "Developer",
    date: "24/12/08",
  },
  {
    name: "Richard Gran",
    job: "Manager",
    date: "04/10/21",
  },
];
 
 
export function Pupils() {

  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");

  const [itemsPerPage] = useState(5);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = TABLE_ROWS.slice(indexOfFirstItem, indexOfLastItem);
  const nPages = Math.ceil(TABLE_ROWS.length / itemsPerPage);

  const filteredItems = currentItems.filter(item => {
    Object.values(item).some( 
      (value) => 
        typeof value === "string" && 
        value.toLowerCase().includes(searchTerm.toLowerCase())  
    )
  })


  const goToNextPage = () => {
    if(currentPage !== nPages) 
      setCurrentPage(currentPage + 1);
    
  }

  const goToPrevPage = () => {
    if(currentPage !== 1) 
      setCurrentPage(currentPage - 1);
    
  }

  const handleSearch = (event) => {
    setSearchTerm(event.target.value)
  }

  return (
    <Card className="h-[100vh] w-full">
      <CardHeader floated={false} shadow={false} className="rounded-none ">
        <div className="mb-8 flex items-center justify-between gap-8">
          <div>
            <Typography variant="h5" color="blue-gray">
              Pupils list
            </Typography>
            <Typography color="gray" className="mt-1 font-normal">
              See information about all pupils
            </Typography>
          </div>
          <div className="w-full md:w-72">
            <Input
              label="Search"
              icon={<IoIosSearch className="h-5 w-5" />}
              onChange={handleSearch}
            />
          </div>
        </div>
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <Tabs value="all" className="w-full md:w-max">
            <TabsHeader>
              {TABS.map(({ label, value }) => (
                <Tab key={value} value={value}>
                  &nbsp;&nbsp;{label}&nbsp;&nbsp;
                </Tab>
              ))}
            </TabsHeader>
          </Tabs>
          
        </div>
      </CardHeader>
      <CardBody className="overflow-x-scroll px-0">
        <table className="mt-4 w-full min-w-max table-auto text-left">
          <thead>
            <tr>
              {TABLE_HEAD.map((head) => (
                <th
                  key={head}
                  className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4"
                >
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal leading-none opacity-70"
                  >
                    {head}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filteredItems.map(
              ({ name, job, date }, index) => {
                const isLast = index === filteredItems.length - 1;
                const classes = isLast
                  ? "p-4"
                  : "p-4 border-b border-blue-gray-50";
 
                return (
                  <tr key={name}>
                    <td className={classes}>
                      <div className="flex items-center gap-3">
                        {/* <Avatar src={img} alt={name} size="sm" /> */}
                        <div className="flex flex-col">
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal"
                          >
                            {name}
                          </Typography>
                          
                        </div>
                      </div>
                    </td>
                    <td className={classes}>
                      <div className="flex flex-col">
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {job}
                        </Typography>
                        
                      </div>
                    </td>
                    <td className={classes}>
                      <div className="w-max">
                        <Chip
                          variant="ghost"
                          size="sm"
                          value={online ? "online" : "offline"}
                          color={online ? "green" : "blue-gray"}
                        />
                      </div>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {date}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Tooltip content="Edit User">
                        <IconButton variant="text">
                          <LuPencil className="h-4 w-4" />
                        </IconButton>
                      </Tooltip>
                    </td>
                  </tr>
                );
              },
            )}
          </tbody>
        </table>
      </CardBody>
      <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4">
        <Typography variant="small" color="blue-gray" className="font-normal">
          Page {currentPage} of {nPages}
        </Typography>
        <div className="flex gap-2">
          <Button variant="outlined" size="sm" onClick={goToPrevPage}>
            Previous
          </Button>
          <Button variant="outlined" size="sm" onClick={goToNextPage}>
            Next
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}