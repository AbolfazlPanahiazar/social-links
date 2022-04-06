import { FC, useState, useEffect } from "react";
import { Box, Typography, Paper, Collapse, Button } from "@mui/material";
import { Add, Edit } from "@mui/icons-material";

import { ISocial } from "typescript";
import { getSocials } from "api";
import {
  root,
  rightTitles,
  paper,
  panelStateTitle,
  panelStateIcon,
  container,
  primaryText,
  formStateButton,
} from "./panel.styles";
import AddForm from "components/AddForm/AddForm";
import EditForm from "components/EditForm/EditForm";
import SocialLinkItem from "components/SocialLinkItem/SocialLinkItem";
import ConfirmDeleteModal from "components/ConfirmDeleteModal/ConfirmDeleteModal";

const Panel: FC = () => {
  const [formState, setFormState] = useState<"add" | "edit" | "none">("none");
  const [socials, setSocials] = useState<ISocial[]>([]);
  const [deletingSocial, setDeletingSocial] = useState<ISocial | null>(null);
  const [editingSocial, setEditingSocial] = useState<ISocial>({
    id: "",
    social_id: "",
    social_link: "",
  });

  const fetchSocials = () => {
    getSocials()
      .then((res) => {
        setSocials(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => {
    fetchSocials();
  }, []);

  return (
    <Box sx={root}>
      <Box sx={container}>
        <Box sx={rightTitles}>
          <Typography fontSize={24} sx={primaryText}>
            حساب کاربری
          </Typography>
        </Box>
        <Box sx={rightTitles} mt={1}>
          <Typography fontSize={14} sx={primaryText}>
            خانه
          </Typography>
          <Typography mx={1} sx={primaryText}>
            .
          </Typography>
          <Typography fontSize={14} sx={primaryText}>
            کاربر
          </Typography>
          <Typography mx={1} sx={primaryText}>
            .
          </Typography>
          <Typography fontSize={14} color="GrayText">
            تنظیمات کاربری
          </Typography>
        </Box>
        <Paper sx={paper}>
          <Box sx={rightTitles}>
            <Typography fontSize={14}>مسیر های ارتباطی</Typography>
          </Box>
          <Box sx={rightTitles} mt={2}>
            <Typography fontSize={12} color="orange" sx={panelStateTitle}>
              {formState !== "edit" ? (
                <Button
                  sx={formStateButton}
                  onClick={() => setFormState("add")}
                >
                  <Add color="inherit" fontSize="small" sx={panelStateIcon} />
                  افزودن مسیر ارتباطی
                </Button>
              ) : (
                <Button
                  sx={formStateButton}
                  onClick={() => setFormState("edit")}
                >
                  <Edit color="inherit" fontSize="small" sx={panelStateIcon} />
                  ویرایش مسیر ارتباطی
                </Button>
              )}
            </Typography>
          </Box>
          <Collapse in={formState === "add"}>
            <AddForm collapse={() => setFormState("none")} />
          </Collapse>
          <Collapse in={formState === "edit"}>
            <EditForm
              collapse={() => {
                setFormState("none");
                setEditingSocial({ id: "", social_id: "", social_link: "" });
              }}
              social={editingSocial}
            />
          </Collapse>
          <Box mt={3}>
            {socials.map((i) => (
              <SocialLinkItem
                key={i.id}
                social={i}
                onDelete={() => {
                  setDeletingSocial(i);
                }}
                onEdit={() => {
                  setEditingSocial(i);
                  setFormState("edit");
                }}
              />
            ))}
          </Box>
        </Paper>
      </Box>

      <ConfirmDeleteModal
        id={deletingSocial?.id || ""}
        close={() => {
          setDeletingSocial(null);
        }}
        open={!!deletingSocial?.id}
        social_id={deletingSocial?.social_id || ""}
      />
    </Box>
  );
};

export default Panel;
