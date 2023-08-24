import { useState } from "react";
import { selectBranches, selectRepository } from "./utils";
import { ICommitData } from "./interfaces/commitData.interface";
import { CommitElement } from "../../components";
import Container from "@mui/material/Container";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import Grid from "@mui/material/Grid";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Typography from "@mui/material/Typography";
import Skeleton from "@mui/material/Skeleton";
import useFetchData from "./hooks/useFetchData";
const MainPage = () => {
  const [repoSelected, setRepoSelected] = useState<string>(selectRepository[0]);
  const [branchSelected, setBranchSelected] = useState<string>(selectBranches[0]);
  const { commitsData, error, loading } = useFetchData({ repoSelected, branchSelected })
  const handleSelectRepoChange = (value: string) => setRepoSelected(value);
  const handleSelectBranchChange = (value: string) => setBranchSelected(value);
  return (
    <Container maxWidth="sm" sx={{ py: 5 }}>
      <Grid container spacing={3}>
        <Grid
          item
          xs={12}
          sx={{ display: "flex", justifyContent: "center", py: 5 }}
        >
          <Typography variant="h3">Github Commits</Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <FormControl fullWidth>
            <Select
              labelId="commit-select-label"
              id="commit-select-id"
              label="Age"
              value={repoSelected}
              onChange={({ target: { value } }) =>
                handleSelectRepoChange(value)
              }
            >
              {selectRepository.map((element, index) => {
                return (
                  <MenuItem key={index} value={element}>
                    {element}
                  </MenuItem>
                );
              })}
            </Select>
            <FormHelperText id="demo-simple-select-label">
              Repository
            </FormHelperText>
          </FormControl>
        </Grid>
        <Grid item xs={12} md={6}>
          <FormControl fullWidth>
            <Select
              labelId="commit-select-label"
              id="commit-select-id"
              label="Age"
              value={branchSelected}
              onChange={({ target: { value } }) =>
                handleSelectBranchChange(value)
              }
            >
              {selectBranches.map((element, index) => {
                return (
                  <MenuItem key={index} value={element}>
                    {element}
                  </MenuItem>
                );
              })}
            </Select>
            <FormHelperText id="demo-simple-select-label">
              Branch
            </FormHelperText>
          </FormControl>
        </Grid>
        {!loading && error &&
          <Grid item xs={12}>
            <Typography>ERROR.....</Typography>
          </Grid>
        }
        {loading &&
          <Grid item xs={12}>
            {[30, 100, 20].map((e) => <Skeleton variant="text" animation="wave" width={500} height={e}></Skeleton>
            )}
          </Grid>
        }
        {!loading && !error && commitsData &&
          commitsData.map((e: ICommitData, index) => (
            <Grid item xs={12} key={index}>
              <CommitElement commit={e.commit} nodeId={e.nodeId} />
            </Grid>
          ))}
      </Grid>
    </Container>
  );
};
export default MainPage;
