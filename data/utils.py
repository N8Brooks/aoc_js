#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Utility functions
"""


from functools import cache
import os
from requests import Session


@cache
def get_root_path():
    return os.path.abspath(os.path.dirname(__file__))


@cache
def get_session_path():
    return os.path.join(get_root_path(), "session.txt")


def get_cookies():
    root_path = get_root_path()
    session_path = get_session_path()

    if os.path.isfile(session_path):
        with open(os.path.join(root_path, session_path), "r") as file:
            return {"cookies": {"session": file.read()}}

    return None


def get_input(year, day):
    root_path = get_root_path()
    path = os.path.join(root_path, f"year{year}", f"day{day:02}.txt")

    if os.path.isfile(path):
        with open(path, "r") as file:
            return file.read()

    if get_cookies() is None:
        message = f"missing data/session.txt or data/{year}/{day:02}.txt"
        raise FileNotFoundError(message)

    url = f"https://adventofcode.com/{year}/day/{day}/input"
    text = Session().get(url, **get_cookies()).text
    os.makedirs(os.path.dirname(path), exist_ok=True)
    with open(path, "w") as file:
        file.write(text)

    return text
