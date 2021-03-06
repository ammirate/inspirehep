# -*- coding: utf-8 -*-
#
# Copyright (C) 2019 CERN.
#
# inspirehep is free software; you can redistribute it and/or modify it under
# the terms of the MIT License; see LICENSE file for more details.

from .json import (
    literature_json_v1_response,
    literature_json_v1_response_search,
    literature_authors_json_v1_response,
    literature_references_json_v1_response,
    facets_json_response_search,
    authors_json_v1_response,
)

from .bibtex import literature_bibtex_response, literature_bibtex_response_search
from .latex import latex_response_eu, latex_response_us
