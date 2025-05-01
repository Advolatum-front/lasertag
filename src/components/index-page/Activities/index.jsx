import { Link } from "react-router-dom";
import { useEffect, useMemo } from "react";
import { Spin } from "@gravity-ui/uikit";

import ActivityItem from "./activityItem";

import { activitiesService } from "../../../services/activities";

import { useQuery } from "@tanstack/react-query";

import "./index.css";

const LIMIT = 3;

const requestFunction = () => activitiesService.getActivities({ limit: LIMIT });

const Activities = () => {
  const { data: rawActivities, isLoading } = useQuery({
    queryKey: ["activities", "activitiesByLimit"],
    queryFn: requestFunction,
  });

  const activities = useMemo(() => rawActivities?.data || [], [rawActivities]);

  return (
    <section className="activities">
      <div className="activities__shooter" />
      <h2 className="activities__section-header">Мероприятия</h2>
      {isLoading || !activities ? (
        <Spin size="xl" />
      ) : (
        <ul className="activities__list">
          {activities.map((activityItem) => (
            <ActivityItem key={activityItem.id} {...activityItem} />
          ))}
        </ul>
      )}
      <Link to="/" className="activities__link-to-all">
        <span>Все мероприятия</span>
      </Link>
    </section>
  );
};

export default Activities;
